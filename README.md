# NutriNova Feed (NNF) Website

A premium React + Vite website for NutriNova Feed, built for dairy farmers, cattle buyers, distributors, and bulk buyers in Pakistan.

## Stack

- React 19
- Vite 6
- TypeScript
- Framer Motion
- Lucide React
- React Router

## Features

- Responsive premium homepage and brand storytelling
- Separate product catalog and product detail pages
- Dairy Feed and Cattle Fattening category pages
- Quality and manufacturing information
- Resources, FAQ, privacy policy, and contact pages
- WhatsApp inquiry integrations with pre-filled messaging
- Search and category filtering for the product catalog
- Mobile drawer navigation and smooth motion effects

## Project structure

- src/App.tsx – route definitions and app shell
- src/components – reusable layout and card components
- src/config/site.ts – business contact and WhatsApp configuration
- src/data/products.ts – centralized product catalog data
- src/pages – page-level components
- src/index.css – design system and responsive styling
- public/images – brand and product assets
- public/robots.txt – crawler rules
- public/sitemap.xml – sitemap

## Local setup

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Build for production:
   npm run build
4. Preview the production build:
   npm run preview

## Business details still to confirm

- Final company address if more precise than the current configured information
- Any additional dealership or distribution contact details
- Real social media URLs if available
- Product specification sheets if a downloadable file is later supplied
- Extra farm photography for calves, warehouse, and bulk feed scenes if needed

## Asset notes

The project currently uses available product and brand images from the existing public/images folder and a farm photograph to support the premium agricultural look. If more imagery is added, it should follow the same realistic style and should not invent packaging or product claims.
