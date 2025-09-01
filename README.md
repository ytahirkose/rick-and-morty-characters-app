# Rick and Morty Characters App

**PRIVATE PROJECT - COMMERCIAL USE PROHIBITED**

## ⚠️ IMPORTANT WARNING AND LICENSE TERMS

This project has been **PRIVATELY DEVELOPED** by **YASAR TAHİRKÖSE** and **COMMERCIAL USE IS PROHIBITED**. The following conditions and legal responsibilities apply:

### 🚫 PROHIBITED USES:
- Commercial purposes
- Sale, rental, or commercial distribution
- Integration in commercial projects
- Use in paid services
- Creation of commercial trademarks or patents

### ✅ PERMITTED USES:
- Personal learning and educational purposes
- Reference in open source projects (with proper attribution)
- Teaching purposes in non-profit educational institutions

### ⚖️ LEGAL RESPONSIBILITIES:
Individuals or organizations using this project for the above prohibited purposes will be:
- Held responsible for copyright infringement
- Subject to legal sanctions
- Required to pay material and moral compensation
- Prosecuted under criminal law

### 📞 CONTACT AND PERMISSION:
If you want to obtain special permission for commercial use:
- **Developer**: YASAR TAHİRKÖSE
- **Contact**: [Contact information kept private]
- **License Fee**: Special license fee required for commercial use

---

## 🚀 Project Features

Modern, responsive web application - designed to explore Rick and Morty characters with advanced filtering and pagination capabilities.

### ✨ Main Features:
- Character browsing and filtering
- Status and gender-based filtering
- URL-based state management
- Server-Side Rendering (SSR)
- Responsive design
- Real-time updates
- Pagination system

### 🛠️ Technology Stack:
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **URL Management**: nuqs
- **UI Components**: shadcn/ui
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📋 Installation

### Requirements:
- Node.js 18+
- npm or yarn

### Steps:

```bash
git clone <repository-url>
cd rick-and-morty-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── character-card.tsx # Character card
│   ├── character-filters.tsx # Filter controls
│   ├── character-grid.tsx # Character grid layout
│   └── pagination.tsx     # Pagination controls
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries
├── store/                  # State management
└── types/                  # TypeScript type definitions
```

## 🌐 API Integration

Integration with Rick and Morty API:
- **Base URL**: `https://rickandmortyapi.com/api`
- **Endpoint**: `/character`
- **Query Parameters**: `status`, `gender`, `page`

## 🎨 UI/UX Features

- Modern, clean design
- Responsive grid system
- Loading animations
- Error handling
- Accessibility support
- Dark mode ready

## 🔍 Filtering and Search

- Status filter (Alive, Dead, Unknown)
- Gender filter (Female, Male, Genderless, Unknown)
- Combined filters
- URL persistence
- Real-time updates

## 📱 Responsive Design

- Mobile-first approach
- Responsive breakpoints
- Touch-friendly optimization
- Performance optimization

## 🚀 Performance Features

- Smart caching with React Query
- Image optimization
- Code splitting
- Server-side rendering

---

## 📄 License

**This project is protected under a private license. Commercial use is prohibited.**

## ⚖️ Legal Warning

Individuals or organizations using this project for prohibited purposes will be prosecuted for copyright infringement and other legal responsibilities.

---

**Developer**: YASAR TAHİR KÖSE  
**Project Date**: 2025  
**License Status**: Private License - Commercial Use Prohibited
