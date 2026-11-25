# Parteys Catering Services

A modern, responsive website for Parteys Catering Services (Est. 2017). This complete information system showcases catering services, packages, gallery, and provides an easy way for clients to request quotes.

## 🌟 Features

### Cross-Platform Responsive Design
- **Desktop, Tablet & Mobile Compatible** - Fully responsive design that adapts to any screen size
- **DevTools Webview Ready** - Optimized for viewing in browser developer tools mobile view
- **Touch-Friendly** - All interactive elements optimized for mobile touch interactions

### Four Complete Pages

#### 1. **Home Page** (`index.html`)
- Hero section with background image
- Services overview cards
- "Why Choose Us" section with feature highlights
- Photo gallery preview
- Call-to-action section
- Footer with contact information

#### 2. **Menu Page** (`menu.html`)
- Comprehensive menu categories:
  - Appetizers
  - Main Courses
  - Side Dishes
  - Desserts
  - Beverages
- Three package deals:
  - Basic Package (₱500/person)
  - Premium Package (₱750/person)
  - Deluxe Package (₱1,000/person)
- Detailed descriptions and pricing

#### 3. **Gallery Page** (`gallery.html`)
- Interactive filterable gallery
- Filter by category: All, Events, Food, Decorations
- Lightbox image viewer
- Client testimonials with star ratings
- Call-to-action section

#### 4. **Contact Page** (`contact.html`)
- Contact information cards with phone, email, and address
- Quote request form with:
  - Personal information fields
  - Event details (type, date, time, location)
  - Guest count
  - Additional requirements textarea
- Real-time form validation
- Success/error messages

## 🎨 Design Features

## 🎨 Design Features

### Visual Design
- **Ultra-Modern Floating Navbar**: 
  - Glassmorphism effect with backdrop blur
  - Rounded corners (32px) with centered layout
  - Sticky positioning, never changes color
  - Multi-layer premium shadows
  - Gradient border accent
- **Hero Section**:
  - Clean animated gradient background (NO image)
  - Dark text on light background (perfect visibility)
  - Floating decorative elements
  - Gradient text effects
  - Smooth entrance animations
- **Color Scheme**:
  - Primary: Warm Orange (#D48508)
  - Secondary: Forest Green (#2C5F2D)
  - Accent: Wine (#97266D)
  - High contrast text (#1a1a1a) for readability
- **Typography**:
  - Headings: Playfair Display (elegant serif)
  - Body: Inter (modern sans-serif)
  - Refined sizing and spacing
- **Layout**: Clean, modern, premium aesthetic with glassmorphic elements

### Interactive Elements
- Smooth scrolling navigation
- Animated scroll-triggered elements
- Hover effects on cards and buttons
- Mobile-friendly hamburger menu
- Gallery filtering system
- Image lightbox viewer
- Form validation with error messages

## 📁 Project Structure

```
parteys-catering/
├── index.html              # Home page
├── menu.html              # Menu & packages page
├── gallery.html           # Photo gallery with filters
├── contact.html           # Contact & quote form
├── css/
│   └── styles.css         # Complete stylesheet (1300+ lines)
├── js/
│   └── main.js           # JavaScript functionality
├── images/
│   ├── hero.jpg          # Hero section background
│   ├── pic1.jpg          # Why Choose Us section
│   ├── pic2.jpg          # Gallery image 1
│   ├── pic3.jpg          # Gallery image 2
│   ├── pic4.jpg          # Gallery image 3
│   └── pic5.jpg          # Gallery image 4
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build process required - runs directly in browser

### Installation & Usage

1. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or drag and drop any HTML file into your browser

2. **View in Mobile Mode**
   - Open browser DevTools (F12 or Right-click → Inspect)
   - Click the device toolbar icon (Ctrl+Shift+M / Cmd+Shift+M)
   - Select different device sizes to see responsive design

3. **Navigate**
   - Use the navigation menu to explore all pages
   - On mobile, click the hamburger menu (☰) to open navigation

## 💻 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies or frameworks
- **Google Fonts** - Playfair Display & Inter
- **SVG Icons** - Scalable vector graphics for crisp icons

### Key JavaScript Features
- Mobile menu toggle with accessibility support
- Gallery filtering system
- Lightbox image viewer
- Form validation (email, phone, required fields)
- Smooth scrolling
- Scroll animations
- Navbar scroll effects

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 Key Functionality

### Gallery Filtering
```javascript
// Click filter buttons to show:
- All items
- Events only
- Food only
- Decorations only
```

### Form Validation
The contact form validates:
- Required fields (name, email, phone, etc.)
- Email format
- Phone number format
- Guest count (must be positive number)
- Real-time error messages
- Success confirmation on submission

### Lightbox
- Click any gallery image to view in fullscreen
- Press ESC or click X to close
- Click outside image to close

## 📱 Mobile Responsiveness

### Mobile Menu
- Hamburger icon appears on screens < 768px
- Full-screen overlay menu
- Smooth slide-in animation
- Auto-closes after link click

### Touch Optimization
- Large tap targets (minimum 44x44px)
- Swipe-friendly galleries
- No hover-dependent functionality
- Optimized form fields for mobile keyboards

## 🔧 Customization Guide

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D48508;    /* Change main color */
    --secondary-color: #2C5F2D;  /* Change secondary color */
    --accent-color: #97266D;     /* Change accent color */
}
```

### Update Images
Replace files in `/images/` folder with your own:
- `hero.jpg` - Main hero background (1920x1080px recommended)
- `pic1.jpg` - Why Choose Us image (800x600px recommended)
- `pic2-5.jpg` - Gallery images (800x600px recommended)

### Update Menu Items
Edit the menu sections in `menu.html`:
- Modify item names, descriptions, and prices
- Add or remove menu items
- Update package details and pricing

### Update Contact Information
Edit contact details in:
- Footer section (all pages)
- Contact page cards
- Replace phone, email, and address

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Checklist for Launch

- [ ] Replace all placeholder images
- [ ] Update contact information (phone, email, address)
- [ ] Customize menu items and pricing
- [ ] Review and update package details
- [ ] Add actual client testimonials
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Test form submission
- [ ] Optimize images for web (compress)
- [ ] Add Google Analytics (if needed)

## 🎓 Learning Resources

This project demonstrates:
- Semantic HTML5 structure
- CSS Grid and Flexbox layouts
- Responsive design principles
- JavaScript DOM manipulation
- Form validation
- Event handling
- CSS animations
- Mobile-first development

## 📞 Support

For questions about this website:
- **Phone**: +63 912 345 6789
- **Email**: info@parteys.com
- **Address**: 123 Catering Street, Metro Manila, Philippines

## 📄 License

This website is designed for Parteys Catering Services. All rights reserved.

---

**Parteys Catering Services** - Making Every Event Special Since 2017 🍽️✨
