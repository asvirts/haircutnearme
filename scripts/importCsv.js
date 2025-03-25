const fs = require("fs")
const path = require("path")
const { parse } = require("csv-parse/sync")
const chalk = require("chalk")

// Create scripts directory if it doesn't exist
if (!fs.existsSync(path.join(process.cwd(), "scripts"))) {
  fs.mkdirSync(path.join(process.cwd(), "scripts"))
}

// Path to data directory
const dataDir = path.join(process.cwd(), "data")

// Get all CSV files in the data directory
const csvFiles = fs
  .readdirSync(dataDir)
  .filter((file) => file.toLowerCase().endsWith(".csv"))

if (csvFiles.length === 0) {
  console.log(chalk.yellow("No CSV files found in the data directory."))
  process.exit(0)
}

// Read the current db.json
const dbPath = path.join(dataDir, "db.json")
let db
try {
  db = JSON.parse(fs.readFileSync(dbPath, "utf8"))
} catch (error) {
  console.error(chalk.red(`Error reading db.json: ${error.message}`))
  process.exit(1)
}

// Generate a fingerprint for salon to use for duplicate detection
function generateFingerprint(salon) {
  // Normalize and combine title, address and phone as a unique signature
  const title = (salon.title || "").toLowerCase().trim()
  const address = (salon.address || "").toLowerCase().trim()
  const phone = (salon.phone || "").replace(/\D/g, "") // Remove non-digits
  return `${title}|${address}|${phone}`
}

// Create fingerprints for existing salons
const existingFingerprints = new Set()
if (db.salons && db.salons.length > 0) {
  db.salons.forEach((salon) => {
    existingFingerprints.add(generateFingerprint(salon))
  })
}

// Track the total counts
let totalNewSalons = 0
let totalFailedRecords = 0
let totalDuplicateCount = 0

// Process each CSV file
for (const csvFile of csvFiles) {
  const csvPath = path.join(dataDir, csvFile)
  console.log(chalk.blue(`Processing file: ${csvFile}`))

  // Read the CSV file
  let csvData
  try {
    csvData = fs.readFileSync(csvPath, "utf8")
  } catch (error) {
    console.error(
      chalk.red(`Error reading CSV file ${csvFile}: ${error.message}`)
    )
    continue // Skip to the next file
  }

  // Parse the CSV
  let records = []
  let failedRecords = 0
  try {
    records = parse(csvData, {
      columns: true,
      skip_empty_lines: true,
      cast: (value, context) => {
        // Try to parse JSON strings
        if (
          context.column !== "input_id" &&
          value &&
          (value.startsWith("{") || value.startsWith("["))
        ) {
          try {
            return JSON.parse(value)
          } catch (e) {
            return value
          }
        }
        return value
      }
    })
  } catch (error) {
    console.error(
      chalk.red(`Error parsing CSV file ${csvFile}: ${error.message}`)
    )
    continue // Skip to the next file
  }

  // Transform the data to match our Salon type and filter duplicates
  let newSalons = []
  let duplicateCount = 0

  records.forEach((record) => {
    try {
      let salon = {
        id:
          parseInt(record.id) ||
          parseInt(Math.random().toString().substring(2, 10)),
        input_id: record.input_id,
        link: record.link,
        title: record.title,
        category: record.category,
        address: record.address,
        open_hours: record.open_hours || {},
        popular_times: record.popular_times || {},
        website: record.website || "",
        phone: record.phone || "",
        plus_code: record.plus_code || "",
        review_count: parseInt(record.review_count) || 0,
        review_rating: parseFloat(record.review_rating) || 0,
        reviews_per_rating: record.reviews_per_rating || {},
        latitude: parseFloat(record.latitude) || 0,
        longitude: parseFloat(record.longitude) || 0,
        cid: parseInt(record.cid) || 0,
        status: record.status || "",
        descriptions: record.descriptions || "",
        reviews_link: record.reviews_link || "",
        thumbnail: record.thumbnail || "",
        timezone: record.timezone || "",
        price_range: record.price_range || "",
        data_id: record.data_id || "",
        images: record.images || [],
        reservations: record.reservations || "",
        order_online: record.order_online || "",
        menu: record.menu || {},
        owner: record.owner || {},
        complete_address: record.complete_address || {
          city: record.city || "",
          state: record.state || "",
          street: record.address || "",
          borough: record.borough || "",
          country: record.country || "",
          postal_code: record.zip_code || ""
        },
        about: record.about || {},
        user_reviews: record.user_reviews || [],
        emails: record.emails || ""
      }

      const fingerprint = generateFingerprint(salon)

      // Check if this salon already exists
      if (!existingFingerprints.has(fingerprint)) {
        newSalons.push(salon)
        existingFingerprints.add(fingerprint) // Add to set to avoid duplicates within the CSV
      } else {
        duplicateCount++
      }
    } catch (error) {
      failedRecords++
      console.error(
        chalk.red(`Failed to process record in ${csvFile}: ${error.message}`)
      )
    }
  })

  // Append new salons to the existing ones
  db.salons = [...db.salons, ...newSalons]

  // Log results with colors for this file
  console.log(
    chalk.green(`  ✓ Successfully imported: ${newSalons.length} salons`)
  )
  console.log(chalk.red(`  ✗ Failed imports: ${failedRecords} records`))
  console.log(chalk.gray(`  • Duplicates skipped: ${duplicateCount} salons`))

  // Delete the CSV file after successful import
  try {
    fs.unlinkSync(csvPath)
    console.log(chalk.blue(`  ℹ Deleted CSV file: ${csvFile}`))
  } catch (error) {
    console.error(
      chalk.red(`  Error deleting CSV file ${csvFile}: ${error.message}`)
    )
  }

  // Update totals
  totalNewSalons += newSalons.length
  totalFailedRecords += failedRecords
  totalDuplicateCount += duplicateCount
}

// Write the updated db.json after processing all files
try {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf8")
} catch (error) {
  console.error(chalk.red(`Error writing to db.json: ${error.message}`))
  process.exit(1)
}

// Log overall results
console.log(chalk.blue.bold("\nOverall Results:"))
console.log(
  chalk.green.bold(`✓ Total successfully imported: ${totalNewSalons} salons`)
)
console.log(
  chalk.red.bold(`✗ Total failed imports: ${totalFailedRecords} records`)
)
console.log(
  chalk.gray.bold(`• Total duplicates skipped: ${totalDuplicateCount} salons`)
)
console.log(chalk.blue.bold(`ℹ Total CSV files processed: ${csvFiles.length}`))

if (totalNewSalons > 0) {
  console.log(chalk.green.bold("\nDatabase successfully updated!"))
} else {
  console.log(chalk.yellow.bold("\nNo new records were added to the database."))
}
