# Mokshapatra Landing Page

Beautiful, conversion-optimized landing page for Mokshapatra - Your Daily Spiritual Companion.

## Features

- 🎨 Modern, spiritual aesthetic design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Animated dice rolling effect
- 📧 Email capture form (Google Sheets integration ready)
- 🚀 Optimized for performance and SEO
- 💜 Built with React + Tailwind-inspired CSS

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

Creates optimized build in `/build` folder.

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Connect custom domain (mokshapatra.com)
4. Deploy!

## Email Integration

Current setup includes a placeholder email form. To connect to Google Sheets:

1. Set up Google Sheet with columns: Email, Timestamp
2. Create Google Apps Script web app
3. Update the `handleEmailSubmit` function in `App.jsx` with your script URL

See full instructions in deployment guide.

## Structure

```
mokshapatra-landing/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.jsx            # Main landing page component
│   ├── App.css            # Styling
│   ├── index.jsx          # Entry point
│   └── index.css          # Base styles
└── package.json           # Dependencies
```

## Customization

### Colors
Edit CSS variables in `App.css`:
```css
:root {
  --primary: #7c3aed;      /* Purple */
  --secondary: #f59e0b;    /* Gold */
  /* ... more colors */
}
```

### Content
Edit text directly in `App.jsx` - all sections are clearly labeled.

### Images
Add images to `/public` folder and reference them in the code.

## Next Steps

- [ ] Add actual dice rolling video/animation
- [ ] Connect email form to Google Sheets
- [ ] Add analytics (Google Analytics, Microsoft Clarity)
- [ ] Create actual logo and favicon
- [ ] Add testimonials when available
- [ ] Connect to main app when ready

---

Built with ❤️ for transformative healing journeys.
