# 🚴 ClassicRide - Quick Start Guide

## 📦 Install & Run (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! Your ClassicRide website is now running. 🎉

---

## 📁 What You Got

### Complete Website Structure
```
✅ 8 Fully Functional Pages
✅ 6 Reusable Components
✅ Shopping Cart System
✅ 12 Bicycles with Full Details
✅ 12 Accessories
✅ Responsive Design
✅ Professional UI/UX
```

### Pages Included
| Route | Page | Features |
|-------|------|----------|
| `/` | Home | Hero, Categories, Featured, Testimonials |
| `/bicycles` | Bicycles Listing | Filter by category, Product grid |
| `/bicycles/:id` | Bicycle Details | Specs, Colors, Add to cart |
| `/accessories` | Accessories | Product grid |
| `/gallery` | Photo Gallery | Lightbox, 12 images |
| `/about` | About Us | Brand story, Values, Process |
| `/contact` | Contact | Form, Location, Hours |
| `/cart` | Shopping Cart | Add/Remove, Quantities, Total |

---

## 🎨 Design Highlights

**Colors:** Classic vintage with amber gold accents  
**Fonts:** Playfair Display (serif) + Inter (sans)  
**Style:** Premium, elegant, timeless  
**Mobile:** Fully responsive, mobile-first  

---

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **React Router 6** - Navigation
- **Tailwind CSS 3** - Styling
- **Vite** - Lightning fast dev server
- **Context API** - State management

---

## 📂 Key Files to Know

### Customize Products
```
src/data/bicycles.js      ← Add/edit bicycles
src/data/accessories.js   ← Add/edit accessories
```

### Customize Pages
```
src/pages/Home.jsx        ← Home page
src/pages/Bicycles.jsx    ← Product listing
src/pages/Cart.jsx        ← Shopping cart
```

### Customize Components
```
src/components/Header.jsx  ← Navigation
src/components/Footer.jsx  ← Footer
src/components/Button.jsx  ← Buttons
```

### Customize Styles
```
tailwind.config.js        ← Colors, fonts
src/index.css            ← Global styles
```

---

## 🎯 Common Tasks

### Add a New Bicycle
1. Open `src/data/bicycles.js`
2. Add new object to array:
```javascript
{
  id: 13,
  name: "Your Bike Name",
  price: 1299,
  category: "road",
  image: "https://your-image.jpg",
  description: "Description here",
  frameMaterial: "Steel",
  gearType: "8-Speed",
  brakeType: "Disc",
  wheelSize: "700c",
  colors: ["Black", "Red"],
  isFeatured: true,
  stock: "In Stock"
}
```

### Change Brand Colors
1. Open `tailwind.config.js`
2. Modify theme colors
3. Replace `amber-700` throughout components with your color

### Update Contact Info
1. Open `src/components/Footer.jsx` - Update footer
2. Open `src/pages/Contact.jsx` - Update contact page

### Replace Logo
1. Open `src/components/Header.jsx`
2. Replace text logo with image:
```jsx
<img src="/logo.png" alt="ClassicRide" className="h-10" />
```

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Vercel**: `vercel` (easiest)
- **Netlify**: Drag `dist/` folder
- **GitHub Pages**: See SETUP.md

---

## ✅ Features Checklist

### Navigation & Routing ✅
- [x] Sticky header with logo
- [x] Desktop navigation menu
- [x] Mobile hamburger menu
- [x] All 8 pages connected
- [x] Active link highlighting
- [x] Smooth page transitions

### Shopping Experience ✅
- [x] Product browsing
- [x] Category filtering
- [x] Product details pages
- [x] Add to cart functionality
- [x] Cart management
- [x] Quantity controls
- [x] Cart persistence (localStorage)
- [x] Cart count badge

### Design & UX ✅
- [x] Premium vintage aesthetic
- [x] Fully responsive (mobile/tablet/desktop)
- [x] Smooth animations
- [x] Hover effects
- [x] Loading states
- [x] Empty states
- [x] Form validation
- [x] Success messages

### Content ✅
- [x] 12 unique bicycles
- [x] 12 accessories
- [x] 4 categories
- [x] 4 testimonials
- [x] 12 gallery images
- [x] About page content
- [x] Contact information

---

## 📖 Documentation

| File | Description |
|------|-------------|
| `README.md` | Main documentation |
| `SETUP.md` | Detailed setup instructions |
| `FEATURES.md` | Complete feature list |
| `QUICK_START.md` | This file! |

---

## 🐛 Troubleshooting

### Issue: Port already in use
**Solution:** Vite will auto-select another port, check terminal

### Issue: Module not found
**Solution:** Run `npm install` again

### Issue: Styles not loading
**Solution:** Hard refresh browser (Ctrl+Shift+R)

### Issue: Images not loading
**Solution:** Check internet connection (using Unsplash CDN)

---

## 💡 Next Steps

### Immediate
1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Explore the website
4. ✅ Check all pages
5. ✅ Test cart functionality

### Customization
1. Replace placeholder images
2. Update brand name and info
3. Customize colors
4. Add your products
5. Update contact details

### Enhancement
1. Add backend API
2. Implement payment processing
3. Add user accounts
4. Add product search
5. Add reviews system
6. Integrate analytics

---

## 🎓 Learning Resources

### React
- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)

### Vite
- [Vite Docs](https://vitejs.dev/)

---

## 📧 Support

Need help? Check these resources:
1. Read `FEATURES.md` for complete feature list
2. Read `SETUP.md` for detailed setup
3. Check component code comments
4. Review Tailwind documentation

---

## 🎉 You're Ready!

Your ClassicRide bicycle e-commerce website is complete and ready to run!

**Start the dev server now:**
```bash
npm install && npm run dev
```

**Then open:** http://localhost:5173

Enjoy your beautiful new bicycle website! 🚴‍♂️✨

---

**Built with ❤️ for classic bicycle enthusiasts**

