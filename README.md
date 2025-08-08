# React Modern Stack Template

🚀 **Production-ready React template** with cutting-edge technologies and best practices built-in. Perfect for building modern web applications with enterprise-grade architecture and developer experience.

**⚡ Lightning-fast development** • **🎨 Beautiful UI components** • **🌍 Internationalization ready** • **🔧 Zero configuration** • **📱 Mobile-first responsive**

## 🚀 Tech Stack

### Core Technologies
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and better DX
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework

### UI & Design
- 🧩 **shadcn/ui** - Beautiful, accessible component library
- 🌙 **next-themes** - Dark/Light theme with system detection
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Radix UI** - Unstyled, accessible UI primitives

### Developer Experience
- 🔧 **ESLint + Prettier** - Code quality and formatting
- 🏗️ **GitHub Actions** - CI/CD pipeline included
- 📝 **Path Aliases** - Clean imports with `@/` prefix
- 🎪 **Hot Module Replacement** - Instant feedback

### Features & Functionality
- 🌍 **react-i18next** - Internationalization (EN/ES included)
- 🐻 **Zustand** - Lightweight state management
- 📝 **React Hook Form + Zod** - Type-safe form handling
- 🛣️ **React Router v6** - Modern client-side routing

### Production Ready
- 🚀 **Optimized builds** - Tree-shaking and code splitting
- 📊 **Bundle analysis** - Performance monitoring ready
- 🔒 **Security** - Updated dependencies, no vulnerabilities
- 📱 **PWA ready** - Easy to extend with service workers

## ✨ Features

- 🌍 **Internationalization** - English and Spanish support
- 🌙 **Dark/Light Theme** - Theme toggle with persistent storage
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI Components** - shadcn/ui component library
- 🔗 **Client-side Routing** - React Router with nested routes
- 📝 **Type Safety** - Full TypeScript support
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🚀 **Fast Development** - Vite HMR
- 📦 **Path Aliases** - Clean imports with `@/` prefix

## � Quick Start

### Prerequisites
- Node.js 20.11.0+ (see `.nvmrc`)
- npm, yarn, or pnpm

### Installation

1. **Use this template** by clicking "Use this template" on GitHub, or clone it:
   ```bash
   git clone <repository-url>
   cd react-modern-stack-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## �🛠️ Installation

1. Clone or copy this project
2. Install dependencies:
   ```bash
   npm install
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## 🌍 Internationalization

The project supports English and Spanish out of the box:

- Translation files: `src/locales/en.json` and `src/locales/es.json`
- Custom hook: `src/hooks/useI18n.ts`
- Language detection and persistence
- Add new languages by creating new JSON files in `src/locales/`

## 🎨 Theme System

- Light/Dark theme toggle
- Persistent theme storage
- CSS variables for easy customization
- shadcn/ui theme integration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   └── theme-provider.tsx
├── hooks/              # Custom hooks
│   └── useI18n.ts      # i18n hook
├── lib/                # Utilities
│   └── utils.ts        # Tailwind utilities
├── locales/            # Translation files
│   ├── en.json         # English translations
│   └── es.json         # Spanish translations
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── About.tsx       # About page
├── types/              # TypeScript types
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── i18n.ts             # i18n configuration
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui configuration

## 🚀 Using as Template

To use this project as a template for new projects:

1. **Use GitHub Template**: Click "Use this template" button on GitHub
2. **Clone your new repository**
3. **Update project information:**
   - Change `name` field in `package.json`
   - Update `title` in `index.html`
   - Modify `README.md` content
   - Update repository URL in `package.json`
4. **Customize content:**
   - Update translations in `src/locales/`
   - Customize theme in `tailwind.config.js`
   - Add your routes in `src/App.tsx`
   - Create your pages in `src/pages/`
   - Update favicon and assets in `public/`
5. **Environment setup:**
   - Copy `.env.example` to `.env.local`
   - Configure your environment variables
6. **First commit:**
   ```bash
   git add .
   git commit -m "Initial commit from template"
   git push
   ```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Check build size and analysis
npm run build -- --analyze
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository to Netlify

## 🧪 Testing & Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npx tsc --noEmit

# Check dependencies for vulnerabilities
npm audit

# Check for outdated dependencies
npm outdated
```

## 📋 Dependencies Overview

### Production Dependencies
- React ecosystem (react, react-dom, react-router-dom)
- UI components (all @radix-ui components, lucide-react)
- Styling (tailwindcss, clsx, tailwind-merge)
- Internationalization (i18next, react-i18next)
- Forms (react-hook-form, zod)
- State management (zustand)
- Theme (next-themes)

### Development Dependencies
- TypeScript and types
- Vite and plugins
- ESLint and TypeScript ESLint
- Build tools

## 🎯 Best Practices Implemented

- **TypeScript strict mode** for type safety
- **Path aliases** for clean imports
- **Component composition** over inheritance
- **Custom hooks** for reusable logic
- **Separation of concerns** (pages, components, hooks, types)
- **Internationalization first** approach
- **Responsive design** with Tailwind CSS
- **Accessible components** with Radix UI
- **Modern React patterns** (functional components, hooks)

## 🐛 Known Issues

- Minor ESLint warnings in shadcn/ui components (non-critical)
- CSS @tailwind warnings in editor (processed by PostCSS, not an issue)

## 🔄 Future Enhancements

- Add more languages
- Implement PWA features
- Add testing setup (Jest/Vitest)
- Add Storybook for component documentation
- Add CI/CD configuration

## 📄 License

This project is intended as a template and can be freely used and modified for your projects.
