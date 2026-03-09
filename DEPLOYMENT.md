# Deployment Guide

Complete guide to deploy your React portfolio to various platforms.

## 🌐 Deployment Options

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free for personal projects
- Perfect for React apps

**Steps:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (default or custom)
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

**Environment Variables:**
After deployment, add environment variables in Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`

**Custom Domain:**
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

### 2. Netlify 🎯

**Why Netlify?**
- Drag-and-drop deployment
- Automatic builds from Git
- Free SSL
- Form handling
- Great for static sites

**Method A: Drag & Drop**

```bash
# Build the project
npm run build

# Go to https://app.netlify.com/drop
# Drag the 'build' folder
```

**Method B: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

**Method C: Git Integration**

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Add environment variables in site settings

**Environment Variables:**
1. Site settings → Build & deploy → Environment
2. Add the same variables as in `.env`

---

### 3. GitHub Pages 📄

**Why GitHub Pages?**
- Free hosting
- Easy integration with GitHub
- Good for open source portfolios

**Steps:**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository settings
   - Scroll to "Pages"
   - Source: gh-pages branch
   - Save

**Note:** GitHub Pages doesn't support environment variables. For EmailJS to work, you'll need to use the public key directly in the code (not recommended for sensitive data).

---

### 4. Firebase Hosting 🔥

**Why Firebase?**
- Google infrastructure
- Fast global CDN
- Free tier available
- Easy rollbacks

**Steps:**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init

# Select:
# - Hosting
# - Use existing project or create new
# - Public directory: build
# - Single-page app: Yes
# - GitHub integration: Optional

# Build
npm run build

# Deploy
firebase deploy
```

---

### 5. AWS Amplify ☁️

**Why AWS Amplify?**
- AWS infrastructure
- CI/CD pipeline
- Custom domains
- Environment variables support

**Steps:**

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Build settings (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Add environment variables in app settings
6. Deploy

---

## 🔧 Pre-Deployment Checklist

- [ ] Test locally: `npm start`
- [ ] Build successfully: `npm run build`
- [ ] Test production build: `npx serve -s build`
- [ ] Update personal information
- [ ] Replace placeholder images
- [ ] Update resume PDF
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Verify EmailJS credentials
- [ ] Check console for errors
- [ ] Test all animations
- [ ] Verify responsive design

## 🎨 Custom Domain Setup

### For Vercel:
1. Add domain in Vercel dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. Add domain in Netlify dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### For GitHub Pages:
1. Add CNAME file in public folder:
   ```
   yourdomain.com
   ```
2. Update DNS:
   ```
   Type: A
   Name: @
   Values:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153

   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

## 🔒 Environment Variables

**Important:** Never commit `.env` to Git!

For each platform, add these variables:

```
REACT_APP_EMAILJS_PUBLIC_KEY=Kng2efR38vEPW0r7b
REACT_APP_EMAILJS_SERVICE_ID=service_tj4zjqg
REACT_APP_EMAILJS_TEMPLATE_ID=template_1xvsetv
```

## 📊 Performance Optimization

Before deploying, optimize your build:

1. **Optimize Images:**
   ```bash
   # Install image optimizer
   npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
   ```

2. **Enable Compression:**
   Most platforms enable gzip/brotli automatically

3. **Lazy Load Images:**
   Already implemented with React

4. **Check Bundle Size:**
   ```bash
   npm run build
   # Check build/static/js/*.js sizes
   ```

## 🐛 Common Deployment Issues

### Issue: Blank page after deployment
**Solution:** Check `homepage` in package.json matches your URL

### Issue: 404 on refresh
**Solution:** Configure server for SPA routing
- Vercel/Netlify: Automatic
- Others: Add `_redirects` or `.htaccess`

### Issue: Environment variables not working
**Solution:** 
- Ensure variables start with `REACT_APP_`
- Rebuild after adding variables
- Check platform-specific env var settings

### Issue: Images not loading
**Solution:** 
- Use `/images/file.jpg` not `./images/file.jpg`
- Ensure images are in `public/` folder

## 📈 Post-Deployment

1. **Test Everything:**
   - All pages load
   - Forms work
   - Links are correct
   - Mobile responsive
   - Fast loading

2. **Set Up Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Netlify Analytics

3. **Monitor Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

4. **SEO:**
   - Submit sitemap to Google Search Console
   - Add meta tags
   - Verify Open Graph tags

## 🎉 Success!

Your portfolio is now live! Share it:

- LinkedIn profile
- GitHub README
- Resume
- Email signature
- Social media

---

Need help? Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Firebase Docs](https://firebase.google.com/docs/hosting)
