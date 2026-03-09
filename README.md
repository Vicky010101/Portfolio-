# Vikas Hanamant Rathod - Portfolio (React)

A modern, responsive portfolio website built with React.js, featuring a blue neon cyber theme with interactive animations and particle effects.

## Features

- ✨ Modern React with functional components and hooks
- 🎨 Identical UI/UX from original HTML design
- 📱 Fully responsive across all devices
- 🎭 Smooth animations and particle background
- 📧 Working contact form with EmailJS integration
- 🎯 Smooth scroll navigation
- 🔄 Dynamic typing effect
- 📊 Animated skill bars and statistics
- 🎨 Project filtering system
- 🌐 Social media integration

## Project Structure

```
src/
├── components/
│   ├── About.js              # About section with stats animation
│   ├── Certifications.js     # Certifications grid
│   ├── Contact.js            # Contact form with EmailJS
│   ├── CursorTrail.js        # Custom cursor trail effect
│   ├── Education.js          # Education timeline
│   ├── Footer.js             # Footer component
│   ├── Hero.js               # Hero section with typing effect
│   ├── Navbar.js             # Navigation bar
│   ├── ParticlesBackground.js # Animated particle background
│   ├── Projects.js           # Projects with filtering
│   └── Skills.js             # Skills with animated bars
├── styles/
│   └── index.css             # All styles (identical to original)
├── App.js                    # Main app component
└── index.js                  # React entry point

public/
├── images/                   # Profile and project images
├── assets/                   # Resume PDF
└── index.html               # HTML template
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure EmailJS:**
   
   The `.env` file is already configured with the EmailJS credentials from your original project:
   ```
   REACT_APP_EMAILJS_PUBLIC_KEY=Kng2efR38vEPW0r7b
   REACT_APP_EMAILJS_SERVICE_ID=service_tj4zjqg
   REACT_APP_EMAILJS_TEMPLATE_ID=template_1xvsetv
   ```

   If you need to update these values, edit the `.env` file.

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

   This creates an optimized production build in the `build/` folder.

## EmailJS Configuration

The contact form uses EmailJS to send emails. The configuration is already set up with your existing credentials:

- **Public Key:** Kng2efR38vEPW0r7b
- **Service ID:** service_tj4zjqg
- **Template ID:** template_1xvsetv

The form includes:
- Client-side validation
- Error handling
- Success/failure messages
- Disabled state during submission

## Features Breakdown

### Navigation
- Sticky navbar with smooth scroll
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Rotating role titles (typing effect)
- Animated orbiting icons
- Social media links
- Call-to-action buttons

### About Section
- Animated statistics counter
- Highlight cards
- Skills overview

### Projects Section
- Filter by category (All, AI/ML, Full-Stack, Data)
- Hover effects
- Technology tags

### Skills Section
- Animated progress bars
- Categorized skills
- Icon representations

### Contact Form
- Real-time validation
- EmailJS integration
- Error messages
- Success feedback

### Background Effects
- Animated particle system
- Interactive cursor trail
- Smooth animations

## Customization

### Update Personal Information

Edit the respective component files:
- **Hero.js** - Name, roles, bio
- **About.js** - About text, stats
- **Projects.js** - Project data
- **Skills.js** - Skills and levels
- **Certifications.js** - Certifications list
- **Education.js** - Education timeline
- **Contact.js** - Contact information

### Update Styling

All styles are in `src/styles/index.css`. The design uses CSS variables for easy theming:

```css
:root {
  --bg: #0b0f14;
  --bg-2: #0f1620;
  --text: #e6edf3;
  --muted: #9fb1c6;
  --accent: #58a6ff;
  --accent-2: #22d3ee;
}
```

### Update Images

Replace images in the `public/images/` folder:
- `svg.jpg` - Profile picture
- Add any additional project images

### Update Resume

Replace `public/assets/resume.pdf` with your updated resume.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized particle count based on screen size
- Lazy loading for animations
- Efficient re-renders with React hooks
- Minimal bundle size

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## License

© 2026 Vikas Hanamant Rathod. All rights reserved.

## Contact

- **Email:** vrathod07913@gmail.com
- **LinkedIn:** [vikas-rathod-047496261](https://linkedin.com/in/vikas-rathod-047496261)
- **GitHub:** [Vicky010101](https://github.com/Vicky010101)
- **Instagram:** [@call_me_vicky_0101](https://www.instagram.com/call_me_vicky_0101)

---

Built with ❤️ using React.js
