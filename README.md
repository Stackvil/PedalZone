<<<<<<< HEAD
# ClassicRide - Premium Classic Bicycles

A beautiful, production-ready classic bicycle e-commerce website built with React and Tailwind CSS. Features a vintage, premium aesthetic with elegant typography and a fully responsive design.

![ClassicRide](https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80)

## 🚴 Features

- **Premium Design**: Classic, vintage aesthetic with elegant typography and muted colors
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **React Router**: Smooth navigation between pages
- **Shopping Cart**: Full cart functionality with local storage persistence
- **Product Details**: Detailed bicycle specifications and color selection
- **Image Gallery**: Beautiful photo gallery with lightbox
- **Contact Form**: Functional contact form with validation
- **Filter System**: Filter bicycles by category

## 📄 Pages

- **Home** (`/`) - Hero section, featured bicycles, categories, testimonials
- **Bicycles** (`/bicycles`) - Full bicycle catalog with category filters
- **Bicycle Details** (`/bicycles/:id`) - Detailed product page with specs
- **Accessories** (`/accessories`) - Premium bicycle accessories
- **Gallery** (`/gallery`) - Photo gallery with lightbox
- **About** (`/about`) - Brand story and craftsmanship process
- **Contact** (`/contact`) - Contact form and location information
- **Cart** (`/cart`) - Shopping cart with quantity management

## 🎨 Design Features

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Color Palette**: 
  - Backgrounds: Slate/Amber/Stone tones
  - Accents: Amber-700 gold accents
  - Text: Stone-900 for headings, Slate-600 for body
- **Components**: Reusable Button, ProductCard, CategoryCard, SectionTitle
- **Animations**: Smooth transitions and fade-in effects

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Context API** - State management for shopping cart

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
classicride/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   └── SectionTitle.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── accessories.js
│   │   └── bicycles.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Accessories.jsx
│   │   ├── BicycleDetails.jsx
│   │   ├── Bicycles.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Key Components

### Header
- Sticky navigation with logo
- Responsive mobile menu
- Cart icon with item count
- Active link highlighting

### Footer
- Brand information
- Quick links
- Contact details
- Social media icons

### ProductCard
- Bicycle/accessory display card
- Hover effects and animations
- Featured badge
- View details button

### Cart Context
- Add/remove items
- Update quantities
- Local storage persistence
- Calculate totals

## 🖼️ Images

This project uses placeholder images from Unsplash. In production, replace these with your own high-quality bicycle images.

## 🚀 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Fonts
Update the Google Fonts link in `index.html` and `tailwind.config.js`:

```javascript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

### Data
Edit files in `src/data/` to update bicycles and accessories:
- `bicycles.js` - Bicycle products
- `accessories.js` - Accessory products

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, visit the contact page or email hello@classicride.com

---

**Built with ❤️ for classic bicycle enthusiasts**

=======
# PedalZone
>>>>>>> 09266d108dcb142f9c42557a3bbe7a8e7f5e806b
