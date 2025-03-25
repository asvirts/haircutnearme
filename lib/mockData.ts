import { JsonDB } from "./jsonDb"

// Mock data for client-side rendering
export const MOCK_DB: JsonDB = {
  salons: [
    {
      id: 1,
      input_id: "input_1",
      link: "https://maps.google.com/salon1",
      title: "Elegance Hair Studio",
      category: "Hair salon",
      address: "123 Main St, Los Angeles, CA 90001",
      open_hours: {
        today: "9:00 AM - 8:00 PM",
        weekly: [
          { day: "Monday", hours: "9:00 AM - 8:00 PM" },
          { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
          { day: "Wednesday", hours: "9:00 AM - 8:00 PM" },
          { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
          { day: "Friday", hours: "9:00 AM - 8:00 PM" },
          { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
          { day: "Sunday", hours: "10:00 AM - 5:00 PM" }
        ]
      },
      popular_times: {},
      website: "https://elegancehair.com",
      phone: "(555) 123-4567",
      plus_code: "ABC123",
      review_count: 125,
      review_rating: 4.7,
      reviews_per_rating: {
        "5": 80,
        "4": 30,
        "3": 10,
        "2": 3,
        "1": 2
      },
      latitude: 34.052235,
      longitude: -118.243683,
      cid: 12345671,
      status: "OPERATIONAL",
      descriptions:
        "A luxury hair salon offering premium hair services in a relaxing environment.",
      reviews_link: "https://maps.google.com/salon1/reviews",
      thumbnail: "/images/salon1.jpg",
      timezone: "America/Los_Angeles",
      price_range: "$$$",
      data_id: "data_1",
      images: ["/images/salon1.jpg", "/images/salon1_2.jpg"],
      reservations: "https://elegancehair.com/book",
      order_online: "",
      menu: {},
      owner: { name: "Jane Smith", response_rate: "95%" },
      complete_address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
        country: "USA"
      },
      about: {
        highlights: [
          "Luxury salon",
          "Premium services",
          "Relaxing environment"
        ],
        services: ["Haircuts", "Color", "Extensions", "Treatments"]
      },
      user_reviews: [],
      emails: "info@elegancehair.com"
    },
    {
      id: 2,
      input_id: "input_2",
      link: "https://maps.google.com/salon2",
      title: "Modern Cuts",
      category: "Hair salon",
      address: "456 Elm St, New York, NY 10001",
      open_hours: {
        today: "10:00 AM - 7:00 PM",
        weekly: [
          { day: "Monday", hours: "10:00 AM - 7:00 PM" },
          { day: "Tuesday", hours: "10:00 AM - 7:00 PM" },
          { day: "Wednesday", hours: "10:00 AM - 7:00 PM" },
          { day: "Thursday", hours: "10:00 AM - 7:00 PM" },
          { day: "Friday", hours: "10:00 AM - 8:00 PM" },
          { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
          { day: "Sunday", hours: "Closed" }
        ]
      },
      popular_times: {},
      website: "https://moderncuts.com",
      phone: "(555) 987-6543",
      plus_code: "DEF456",
      review_count: 98,
      review_rating: 4.5,
      reviews_per_rating: {
        "5": 65,
        "4": 20,
        "3": 8,
        "2": 3,
        "1": 2
      },
      latitude: 40.712776,
      longitude: -74.005974,
      cid: 12345672,
      status: "OPERATIONAL",
      descriptions:
        "Trendy salon specializing in the latest hair styles and techniques.",
      reviews_link: "https://maps.google.com/salon2/reviews",
      thumbnail: "/images/salon2.jpg",
      timezone: "America/New_York",
      price_range: "$$",
      data_id: "data_2",
      images: ["/images/salon2.jpg", "/images/salon2_2.jpg"],
      reservations: "https://moderncuts.com/book",
      order_online: "",
      menu: {},
      owner: { name: "Alex Johnson", response_rate: "90%" },
      complete_address: {
        street: "456 Elm St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA"
      },
      about: {
        highlights: ["Trendy styles", "Expert stylists", "Kid-friendly"],
        services: ["Haircuts", "Color", "Blowouts", "Styling"]
      },
      user_reviews: [],
      emails: "hello@moderncuts.com"
    },
    {
      id: 3,
      input_id: "input_3",
      link: "https://maps.google.com/salon3",
      title: "Classic Barber Shop",
      category: "Barber shop",
      address: "789 Oak St, Chicago, IL 60007",
      open_hours: {
        today: "8:00 AM - 6:00 PM",
        weekly: [
          { day: "Monday", hours: "8:00 AM - 6:00 PM" },
          { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
          { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
          { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
          { day: "Friday", hours: "8:00 AM - 7:00 PM" },
          { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
          { day: "Sunday", hours: "Closed" }
        ]
      },
      popular_times: {},
      website: "https://classicbarber.com",
      phone: "(555) 456-7890",
      plus_code: "GHI789",
      review_count: 75,
      review_rating: 4.8,
      reviews_per_rating: {
        "5": 60,
        "4": 10,
        "3": 3,
        "2": 1,
        "1": 1
      },
      latitude: 41.878113,
      longitude: -87.629799,
      cid: 12345673,
      status: "OPERATIONAL",
      descriptions:
        "Traditional barbershop offering classic cuts and hot shaves.",
      reviews_link: "https://maps.google.com/salon3/reviews",
      thumbnail: "/images/salon3.jpg",
      timezone: "America/Chicago",
      price_range: "$",
      data_id: "data_3",
      images: ["/images/salon3.jpg", "/images/salon3_2.jpg"],
      reservations: "https://classicbarber.com/book",
      order_online: "",
      menu: {},
      owner: { name: "Mike Thomas", response_rate: "85%" },
      complete_address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60007",
        country: "USA"
      },
      about: {
        highlights: ["Traditional barbershop", "Hot shaves", "Classic cuts"],
        services: ["Haircuts", "Beard trims", "Hot shaves", "Facials"]
      },
      user_reviews: [],
      emails: "info@classicbarber.com"
    }
  ],
  services: [
    {
      id: "1-1",
      salon_id: 1,
      name: "Haircut",
      description: "Professional haircut by our expert stylists",
      price: 50,
      duration: 45
    },
    {
      id: "1-2",
      salon_id: 1,
      name: "Color",
      description: "Full hair coloring service",
      price: 120,
      duration: 90
    },
    {
      id: "2-1",
      salon_id: 2,
      name: "Haircut",
      description: "Modern haircut with styling",
      price: 40,
      duration: 30
    },
    {
      id: "3-1",
      salon_id: 3,
      name: "Classic Cut",
      description: "Traditional men's haircut",
      price: 25,
      duration: 30
    }
  ],
  reviews: [],
  appointments: []
}
