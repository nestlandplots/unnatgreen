# UnnatGreen - Static Website

This is now a fully static website with no dependencies on React, Node.js server, or Supabase.

## Project Structure

```
/
├── index.html              # Home page
├── nestland-bhor.html      # Bhor project page
├── nestland-velhe.html     # Velhe project page
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── assets/
│   ├── css/
│   │   └── styles.css      # Compiled Tailwind CSS
│   ├── js/
│   │   ├── header.js       # Header navigation & scroll effects
│   │   ├── gallery.js      # Image lightbox gallery
│   │   └── analytics.js    # Google Analytics integration
│   ├── images/
│   │   ├── logo.png        # Site logo
│   │   └── bhor_plot_layout.jpg  # Bhor plot layout
│   └── videos/
│       └── bhor-tour.mp4   # Bhor video tour
```

## Features

### Pure Static HTML/CSS/JS
- No build process required for deployment
- No React or JavaScript framework dependencies
- Vanilla JavaScript for all interactivity
- Compiled Tailwind CSS (no runtime processing)

### Functionality
- **Header**: Sticky navigation with scroll effects, mobile menu, dropdown for projects
- **Contact**: Direct phone and email links (no form submission)
- **SEO**: Complete meta tags, schema markup, Open Graph, Twitter Cards
- **Analytics**: Google Analytics integration
- **Responsive**: Mobile-first design with Tailwind CSS

### Pages
1. **Home (index.html)**: Overview, reasons to choose, perfect for sections, contact info
2. **Nestland Bhor**: Project details, amenities, plot layout image, video tour
3. **Nestland Velhe**: Project details, amenities, simplified layout

## Deployment

Simply upload all files to any static web host:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any traditional web server (Apache, Nginx)

## No Contact Form Backend

The contact form has been removed as requested. Users can:
- Call directly: 7020875371
- Email: info@unnatgreen.com
- Navigate to contact section via header menu

## Assets Organization

All assets are organized in the `/assets` directory:
- **CSS**: Single compiled stylesheet
- **JS**: Modular vanilla JavaScript files
- **Images**: Optimized images and logos
- **Videos**: Local video files for Bhor tour

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Fast loading (no framework overhead)
- Optimized images with lazy loading
- Minimal JavaScript
- Single CSS file
