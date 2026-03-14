# Sonny-Blinds-Website

Marketing website codebase for Sonny Blinds, focused on showcasing custom window treatment products and collecting customer quote inquiries.

## Overview

This project is currently a single-page React website built with Create React App, organized into reusable UI sections:

- Hero slider with rotating background images and parallax-style scroll effect
- Product showcase cards for blinds and shutters
- About section with company highlights
- Contact and quote form section
- Responsive navigation with desktop dropdowns and mobile menu toggle

## Tech Stack

- React 19
- Create React App (`react-scripts`)
- React Router DOM (used for links/navigation)
- CSS modules by feature folder (`src/styles/*`)
- Testing Library + Jest setup

## Project Structure

```text
.
|- README.md
|- webpage/
   |- package.json
   |- public/
   |- src/
      |- App.js
      |- index.js
      |- components/
      |  |- Navbar.js
      |  |- Hero.js
      |  |- Products.js
      |  |- About.js
      |  |- Contact.js
      |  |- Footer.js
      |- styles/
         |- Navbar.css
         |- Hero.css
         |- Products.css
         |- About.css
         |- Contact.css
         |- Footer.css
```

## Getting Started

1. Install dependencies:

```bash
cd webpage
npm install
```

2. Run the development server:

```bash
npm start
```

3. Open the app:

`http://localhost:3000`

## Available Scripts

From the `webpage/` directory:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production into `webpage/build`.
- `npm run eject`: Ejects CRA config (one-way action).

## Notes on Current Implementation

- There is no backend API or database integration in this repository at the moment.
- The contact form currently handles submission on the client side with a confirmation alert.
- Some navigation links point to future routes and can be wired up as new pages are implemented.

## Acknowledgements

- Nicolas Santana

[![Nicolas Santana CV](https://img.shields.io/badge/Nicolas%20Santana-View%20CV-blue?style=for-the-badge&logo=github)](https://nickstoni.github.io/Nicolas-Santana-CV/)

- Patrick Faraji (@fpaty)