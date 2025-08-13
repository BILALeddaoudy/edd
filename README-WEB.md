# Interest Explorer - Web Version

A Progressive Web App (PWA) for discovering and exploring interests with like-minded people.

## Features

- **Complete User Flow**: Landing → Auth (Login/Signup/Guest) → Language Selection → Interest Categories → Main App
- **Bilingual Support**: English and Arabic with RTL layout support
- **PWA Capabilities**: Installable, offline support, push notifications
- **Mobile Optimized**: Touch-friendly interactions, responsive design
- **Apple-style Design**: Clean, modern interface with smooth animations

## Quick Start (Web Development)

### Option 1: Using Vite (Recommended for web)

```bash
# Install web dependencies
npm install --save-dev vite @vitejs/plugin-react typescript tailwindcss serve

# Install main dependencies
npm install react react-dom lucide-react motion

# Start development server
npm run dev
```

### Option 2: Using a simple HTTP server

```bash
# If you have Node.js installed
npx serve . -s -l 3000

# Or with Python
python -m http.server 3000

# Or with PHP
php -S localhost:3000
```

### Option 3: Deploy to static hosting

Upload all files to any static hosting service:
- Netlify
- Vercel 
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## File Structure

```
├── index.html          # Main entry point for web
├── main.tsx           # React app entry point  
├── App.tsx            # Main app component
├── components/        # All React components
│   ├── AuthOptions.tsx      # Login/Signup/Guest
│   ├── LanguageSelection.tsx # English/Arabic selection
│   ├── InterestSelection.tsx # 8 interest categories
│   └── screens/            # Main app screens
├── public/           # Static assets
│   ├── manifest.json # PWA manifest
│   ├── sw.js        # Service worker
│   └── icons/       # App icons
└── styles/          # CSS files
```

## User Flow

1. **Landing Page**: Auto-transitions after 3 seconds
2. **Authentication**: Login, Signup, or Guest access
3. **Language Selection**: English or Arabic
4. **Interest Categories**: Philosophy, Science, Arts, Technology, Culture & Society, Medicine & Health, Environment & Nature, Language & Communication
5. **Profile Success**: Setup confirmation
6. **Main App**: Full social interest exploration platform

## PWA Features

- **Installable**: Can be installed on mobile/desktop
- **Offline Support**: Works without internet connection
- **Push Notifications**: Real-time updates
- **App Shortcuts**: Quick access to Search and Messages
- **Native Feel**: Smooth animations and touch interactions

## Browser Support

- Chrome/Chromium (Recommended)
- Safari (iOS/macOS)
- Firefox
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Commands

```bash
# Development server
npm run dev

# Production build  
npm run build

# Preview production build
npm run preview

# Serve built files
npm run serve
```

## Customization

- Edit `styles/globals.css` for styling
- Modify `public/manifest.json` for PWA settings
- Update `public/sw.js` for offline behavior
- Customize components in `components/` directory

The app maintains all login functionality and can be easily deployed as a web application while preserving the complete user experience.