# Capacity‑style App Suite Template

This repository contains a multi‑page Next.js and Tailwind CSS template inspired by modern AI‑powered app builders such as the Capacity website.  It provides a clean, responsive design with a home page, pricing page and affiliate program page, plus reusable components like a header, footer, hero section, features, testimonials, comparison table and FAQ.  The goal is to give you a head start when building your own suite of apps.

## Features

* **Component‑based** – built with React/Next.js so you can reuse layouts and easily add new pages.
* **Tailwind CSS** – uses Tailwind’s utility‑first classes to compose any design directly in your markup【23019750717194†L11-L13】.  You can change colours and spacing by editing CSS variables defined in `styles/globals.css` and update the Tailwind config.
* **Responsive design** – mobile‑first layout with responsive breakpoints using Tailwind’s `sm:`, `md:`, and `lg:` prefixes【23019750717194†L50-L66】.
* **Placeholder content** – generic text and images you can replace with your own copy.  The template intentionally avoids replicating proprietary text from Capacity.
* **Extensible sections** – includes hero, features, testimonials, comparison and FAQ sections.  You can add or remove sections to suit your product.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to see the site.

3. Customise the design:

   * Edit the CSS variables in `styles/globals.css` to change colours globally.  Tailwind makes theme customisation simple by allowing you to define CSS variables for your colours and fonts【23019750717194†L119-L128】.
   * Modify the React components in the `components/` directory to tweak the layout or add new features.
   * Adjust the content arrays (e.g. testimonials, FAQs, pricing plans) to reflect your own product.

4. Add new pages by creating files under `pages/`.  Each file automatically becomes a route.

## License

This template is provided for your personal or commercial use.  It contains no proprietary content from capacity.so.