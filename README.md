# Sonny-Blinds-Website
Website codebase for Sonny Blinds. A business webpage for showcasing custom window treatments, service offerings, and customer inquiries.

[![Created by Nicolas Santana](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://nickstoni.github.io/Nicolas-Santana-CV/)

##  Overview

The platform is designed to:

- Showcase products (custom blinds, and shades)
- Highlight services (installation, consultation, measurement)
- Get customer inquiries and quote requests
- Support future expansion

---

## Core Features

- Modern responsive UI (Tailwind CSS)
- SEO-optimized page structure
- Product showcase pages with dynamic routing
- Quote request & contact form system
- Secure backend API routes
- MongoDB integration
- Admin-ready structure for product management

---

## Repository Structure

```
/src
  /app
    /api
      /contact → Customer inquiry endpoint
      /quote → Quote submission endpoint
    /products → Dynamic product pages
    /services → Services overview
    /about → Company information
    /contact → Contact page
    page.tsx → Homepage
  /components
    /layout → Header, Footer, Navigation
    /ui → Buttons, Cards, Forms
    /products → Product display components
  /lib
    mongodb.ts → Database connection
    validations.ts → Form validation logic
    types.ts → TypeScript definitions
/public → Static images & assets

```
---

## Run the development server

```
npm run dev
```

The project should now be running at:
    http://localhost:3000

## Database Models

### User
| Field      | Type     | Description                    |
| ---------- | -------- | ------------------------------ |
| _id        | ObjectId | MongoDB id      |
| name       | String   | Customer full name               |
| email      | String   | Customer email |
| phone   | String   | Contact number       |
| createdAt  | Date     | Account creation time     |
| message   | String   | Inquiry details       |

## Client Routes

| Route         | Description       |
| ------------- | ----------------- 
| `/`           | Homepage          |
| `/products`      | Product catalog        |
| `/services`     | Services offered    |
| `/about`      | Company info    |
| `/contact`     | Contact form     |
| `/quote`    | Quote request form |

## Environment Variables

Create a `.env.local` file in the project's root with the following:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## Future Roadmap

- Admin dashboard for product management
- Image upload & gallery management
- Customer login portal (MAYBE?)
- Online ordering system (MAYBE?)
- Deployment to production (AWS / Vercel)

---

## Acknowledgements

- Sonny Blinds Company
- Patrick Faraji (@fpat)