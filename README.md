# HaircutNearMe

A modern web application to help users find and book appointments with hair salons and stylists in their area.

## 🚀 Project Overview

HaircutNearMe is a Next.js application that connects users with local hair salons and stylists. The platform allows users to search for salons based on location, price range, and services offered, and book appointments with their preferred stylists.

## 📋 Changelog

### Data Schema Update (March 22, 2024)

- Updated Salon data type to match Supabase database schema
- Refactored SalonCard component to work with the new schema
- Updated mock data in homepage to use the new schema format

### Initial Setup (March 22, 2024)

- Created Next.js 15 project with TypeScript, React 19, and TailwindCSS 4
- Set up local JSON database for backend data storage
- Implemented responsive UI components with Tailwind and custom UI components
- Created core data types for Salons, Stylists, Services, Reviews, and Appointments
- Built homepage with search functionality, featured salons, and information sections
- Added SEO optimization with metadata, JSON-LD, and sitemap
- Implemented page routing for various sections of the application
- Added Google AdSense integration
- Created reusable UI components (SalonCard, StylistCard, SearchFilters, etc.)

## 🏗️ Project Structure

```
haircutnearme/
├── app/                # Next.js app router pages
│   ├── about/          # About us page
│   ├── book/           # Appointment booking flow
│   ├── contact/        # Contact page
│   ├── faq/            # FAQ page
│   ├── list-business/  # Business listing page
│   ├── login/          # Authentication page
│   ├── privacy/        # Privacy policy
│   ├── salons/         # Salon listings and details
│   ├── stylists/       # Stylist listings and details
│   ├── terms/          # Terms of service
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout
│   └── ...             # Other app files
├── components/         # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Footer.tsx      # Site footer
│   ├── GoogleAdsense.tsx # Ad integration
│   ├── Header.tsx      # Site header/navigation
│   ├── SalonCard.tsx   # Salon display card
│   ├── SearchFilters.tsx # Search and filtering component
│   ├── StylistCard.tsx # Stylist display card
│   └── ...
├── lib/                # Utilities and services
│   ├── api.ts          # API integration functions
│   ├── jsonDb.ts       # JSON database operations
│   └── utils.ts        # Helper functions
└── public/             # Static assets
```

## 🔧 Key Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, CVA (class-variance-authority)
- **Database**: Local JSON file
- **Authentication**: None (to be implemented)
- **Icons**: Lucide React, Heroicons, React Icons
- **Deployment**: Vercel (planned)

## 🌟 Key Features

- **Salon Search**: Find hair salons by location, price range, and services
- **Stylist Profiles**: View stylist information, specialties, and availability
- **Online Booking**: Book appointments with preferred stylists
- **Reviews**: Read and write reviews for salons and stylists
- **Business Listings**: Allow salon owners to register their businesses
- **Responsive Design**: Mobile-friendly interface for all device sizes

## 📦 Data Models

### Salon

- **Basic Information**: ID, title (name), category, address, descriptions
- **Contact Details**: Phone, website, emails, plus_code
- **Business Hours**: Open hours (including today's hours and weekly schedule)
- **Reviews**: Review count, rating, reviews by rating, user reviews, review link
- **Location**: Latitude, longitude, complete address (street, city, state, zip)
- **Media**: Thumbnail, images collection
- **Business Details**: Price range, status, reservations link, order online link
- **Owner Information**: Name, response rate
- **Metadata**: About section with highlights and services, popular times, menu

### Stylist

- Professional information and bio
- Specialties and services offered
- Experience and ratings
- Portfolio images

### Service

- Service details (name, description)
- Duration and pricing
- Associated stylist

### Review

- Overall and specific ratings
- Customer comments
- Date of experience

### Appointment

- Date, time, and duration
- Selected service and stylist
- Customer information
- Status tracking

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Environment Setup

No environment variables are needed for the local JSON database.

## 🧪 Mock Data

During development, the application uses a local JSON file for salon and stylist data.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop computers

## 🔍 SEO Optimization

- Semantic HTML throughout
- JSON-LD structured data
- Dynamic metadata for each page
- Sitemap and robots.txt

## 🔮 Future Enhancements

- User accounts with favorite salons and stylists
- Email notifications for appointments
- Calendar integration
- Payment processing
- Mobile app version

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)
