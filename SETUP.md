# 🚴 ClassicRide Setup Guide

## Quick Start

Follow these steps to get the ClassicRide website up and running on your local machine.

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check if you have these installed by running:
```bash
node --version
npm --version
```

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- React Router DOM
- Vite
- Tailwind CSS
- PostCSS & Autoprefixer

### 2. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or another port if 5173 is busy).

You should see output like:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 3. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the ClassicRide homepage with the hero section, categories, and featured bicycles.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

## Project Features

### ✅ Fully Functional Features

- **Navigation**: All pages are accessible via the header menu
- **Routing**: Clean URLs with React Router
- **Shopping Cart**: 
  - Add items to cart
  - Update quantities
  - Remove items
  - Persistent storage (localStorage)
  - Real-time cart count in header
- **Product Filtering**: Filter bicycles by category
- **Product Details**: Detailed pages for each bicycle
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Contact Form**: Functional form with validation
- **Image Gallery**: Photo gallery with lightbox modal

### 📁 File Structure Overview

```
src/
├── components/        # Reusable UI components
│   ├── Button.jsx
│   ├── CategoryCard.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── SectionTitle.jsx
│
├── context/           # React Context for state management
│   └── CartContext.jsx
│
├── data/              # Static data (products, categories)
│   ├── accessories.js
│   └── bicycles.js
│
├── pages/             # Page components
│   ├── About.jsx
│   ├── Accessories.jsx
│   ├── BicycleDetails.jsx
│   ├── Bicycles.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   └── Home.jsx
│
├── App.jsx            # Main app with routing
├── main.jsx           # Entry point
└── index.css          # Tailwind CSS imports
```

## Customization Guide

### Update Products

Edit `src/data/bicycles.js` to add/modify bicycles:

```javascript
{
  id: 13,
  name: "Your Bicycle Name",
  price: 1299,
  category: "road", // road, vintage, mountain, kids
  image: "https://your-image-url.jpg",
  description: "Your description",
  frameMaterial: "Steel",
  gearType: "8-Speed",
  brakeType: "Disc",
  wheelSize: "700c",
  colors: ["Black", "Red"],
  isFeatured: true,
  stock: "In Stock"
}
```

### Update Accessories

Edit `src/data/accessories.js` similarly.

### Change Colors

Edit `tailwind.config.js` or use Tailwind's built-in colors throughout the components.

### Replace Images

Replace the Unsplash URLs with your own image URLs. The current images are placeholders from:
- https://unsplash.com

For production, use:
- Your own photography
- Stock photo services
- Image CDN services (Cloudinary, Imgix, etc.)

### Update Brand Information

- **Company Name**: Search and replace "ClassicRide" in all files
- **Contact Info**: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- **Social Links**: Update in `src/components/Footer.jsx`

## Common Issues & Solutions

### Port Already in Use

If port 5173 is busy, Vite will automatically try another port. Check the terminal output for the correct URL.

### Module Not Found Errors

Run:
```bash
npm install
```

### Styling Issues

Clear browser cache or run:
```bash
npm run dev
```
in a fresh terminal.

### Images Not Loading

- Check your internet connection (images are loaded from Unsplash)
- Replace with local images if needed

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Deploy to Netlify

1. Run: `npm run build`
2. Drag `dist/` folder to Netlify
3. Or connect your Git repository

### Deploy to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/classicride",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use WebP format and proper sizing
2. **Lazy Loading**: Add lazy loading for images
3. **Code Splitting**: Already implemented via React Router
4. **CDN**: Serve images from a CDN in production

## Support

For issues or questions:
- Check the README.md file
- Review the code comments
- Open an issue on GitHub

---

**Happy Coding! 🚴‍♂️**

