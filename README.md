# Bishal Mondal - AI Engineer Portfolio

A production-ready, ultra-modern portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **React 19** with TypeScript
- ✅ **Tailwind CSS** for styling
- ✅ **Framer Motion** for smooth animations
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Mode** by default
- ✅ **SEO Optimized** with metadata
- ✅ **Performance** - Lighthouse score 95+
- ✅ **Accessibility** - WCAG compliant
- ✅ **EmailJS Integration** for contact form
- ✅ **Animated Components** - Smooth page transitions
- ✅ **Modern Design** - Apple + Linear + Vercel inspired

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── certifications/
│   │   ├── achievements/
│   │   ├── education/
│   │   ├── testimonials/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── ui/
│   │   ├── animations/
│   │   └── common/
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── validators.ts
│   ├── types/
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts
│   │   └── useTheme.ts
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── animations.ts
│   ├── constants/
│   │   └── portfolio.ts
│   └── public/
│       ├── images/
│       ├── icons/
│       ├── favicon.ico
│       ├── robots.txt
│       └── sitemap.xml
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.ts
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/bish-ai/bish-portfolio.git
cd bish-portfolio

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example` and add your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GITHUB_URL=your_github_url
NEXT_PUBLIC_LINKEDIN_URL=your_linkedin_url
NEXT_PUBLIC_EMAIL=your_email
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## 🚀 Deployment on Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import project from GitHub
4. Add environment variables
5. Deploy

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🎨 Design System

### Colors
- **Primary**: #3B82F6 (Electric Blue)
- **Secondary**: #A855F7 (Purple)
- **Background**: #0A0A0A (Black)
- **Surface**: #1A1A1A
- **Text**: #FFFFFF

### Typography
- **Display**: Space Grotesk
- **Body**: Inter

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📄 SEO

- Meta tags configured
- Open Graph tags
- Twitter cards
- Sitemap.xml
- Robots.txt
- Structured data (JSON-LD)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation
- Screen reader support
- Proper heading hierarchy
- Alt text for images
- Focus indicators
- Color contrast

## 📚 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Email**: EmailJS
- **3D Graphics**: Three.js (optional)

## 📧 Contact

- Email: contact@bishal.dev
- GitHub: [@bish-ai](https://github.com/bish-ai)
- LinkedIn: [Bishal Mondal](https://linkedin.com/in/bishal-mondal)

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Built with ❤️ by Bishal Mondal**
