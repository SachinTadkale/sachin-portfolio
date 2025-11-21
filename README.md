# Sachin Tadkale - Premium Developer Portfolio

A fully responsive, modern, premium-quality developer portfolio website with smooth scroll-based animations, parallax effects, reveal animations, and micro-interactions.

## ✨ Features

- 🎨 **Modern Design**: Clean, futuristic UI with neumorphism and glassmorphism effects
- 🌙 **Dark/Light Mode**: Seamless theme switching with persistent preference
- 🎭 **Smooth Animations**: GSAP-style scroll animations using Framer Motion
- 📱 **Fully Responsive**: Perfect on mobile, tablet, laptop, and large screens
- ⚡ **Performance Optimized**: Fast loading and smooth interactions
- 🔍 **SEO Optimized**: Complete meta tags and semantic HTML
- 🎯 **Interactive Elements**: Magnetic buttons, hover effects, and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd sachin-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
sachin-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── Hero.jsx            # Hero section with animated headline
│   │   ├── About.jsx           # About section with timeline
│   │   ├── Skills.jsx          # Skills section with progress bars
│   │   ├── Projects.jsx        # Projects with filtering
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Education.jsx       # Education section
│   │   ├── Testimonials.jsx    # Testimonials slider
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer with social links
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Dark/Light mode context
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles and Tailwind
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies

```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Modify social media links
   - Update resume download link

2. **About Section** (`src/components/About.jsx`):
   - Edit personal bio
   - Update statistics
   - Modify timeline events

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels (percentage)
   - Update skill categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project images, descriptions, and links
   - Modify filter categories

5. **Experience & Education**:
   - Update work experience in `src/components/Experience.jsx`
   - Update education in `src/components/Education.jsx`

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Integrate with your email API or Google Sheets
   - Update social media links

### Integrate Contact Form

The contact form is ready for integration. You can:

1. **Google Sheets Integration**:
   - Use Google Apps Script to create an endpoint
   - Update the `handleSubmit` function in `Contact.jsx`

2. **Email Service** (e.g., EmailJS, SendGrid):
   - Install the service SDK
   - Update the form submission handler

3. **Backend API**:
   - Create your own API endpoint
   - Update the fetch call in `handleSubmit`

### Change Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  },
}
```

### Update Images

Replace placeholder images in:
- Hero section background blobs (CSS-based, no image needed)
- Project images (update URLs in `Projects.jsx`)
- Testimonial avatars (update URLs in `Testimonials.jsx`)

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lenis** - Smooth scrolling
- **React Icons** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Laptop: 1024px - 1280px
- Desktop: > 1280px

## 🎯 Performance Tips

1. Optimize images before adding them
2. Use lazy loading for images
3. Minimize bundle size by removing unused dependencies
4. Enable production optimizations in Vite

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Sachin Tadkale
- Email: sachin.tadkale@example.com
- Portfolio: [Your Portfolio URL]

---

Made with ❤️ by Sachin Tadkale
