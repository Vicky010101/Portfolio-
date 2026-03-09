# Quick Start Guide

Get your React portfolio running in 3 simple steps!

## 🚀 Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open browser to http://localhost:3000
```

That's it! Your portfolio is now running.

## 📝 What's Already Configured

✅ EmailJS integration (contact form works out of the box)  
✅ All animations and effects  
✅ Responsive design  
✅ All original styling preserved  
✅ Environment variables set up  

## 🎨 Customize Your Portfolio

### 1. Update Personal Info

**src/components/Hero.js** - Line 4
```javascript
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

**src/components/About.js** - Update text content

**src/components/Contact.js** - Update contact details

### 2. Add Your Projects

**src/components/Projects.js** - Line 8
```javascript
const projects = [
  {
    id: 1,
    categories: ['fullstack', 'ai'],
    icon: 'fa-hospital-user',
    chips: ['Full‑Stack', 'AI'],
    title: 'Your Project Title',
    description: 'Your project description',
    tech: ['React', 'Node', 'Firebase']
  },
  // Add more projects...
];
```

### 3. Update Skills

**src/components/Skills.js** - Line 35
```javascript
const skills = [
  {
    icon: 'fa-code',
    title: 'Programming',
    tags: ['Python', 'JavaScript'],
    bars: [
      { name: 'Python', level: 92 },
      // Add more skills...
    ]
  }
];
```

### 4. Replace Images

- Profile picture: `public/images/svg.jpg`
- Resume: `public/assets/resume.pdf`

### 5. Update Colors (Optional)

**src/styles/index.css** - Line 1-10
```css
:root {
  --accent: #58a6ff;      /* Primary color */
  --accent-2: #22d3ee;    /* Secondary color */
  /* Change these to your brand colors */
}
```

## 🔧 EmailJS Setup (If Needed)

If you want to use your own EmailJS account:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and template
3. Update `.env`:
   ```
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   ```

## 📦 Build for Production

```bash
npm run build
```

Creates optimized production files in `build/` folder.

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Drag `build/` folder to [Netlify](https://app.netlify.com/drop)

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add homepage to package.json
npm run deploy
```

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**EmailJS not working?**
- Check `.env` file exists in root
- Verify environment variables are correct
- Restart development server after changing `.env`

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 💡 Tips

- Use `Ctrl+C` to stop the development server
- Changes auto-reload in development mode
- Check browser console for errors
- Test contact form before deploying

---

Need help? Check the full README.md for detailed documentation.
