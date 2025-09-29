# Nesway Foods Website

A modern, beautiful website for Nesway Foods built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components featuring an animated Aurora background.

## Features

- ✨ Animated Aurora background with beautiful gradient effects
- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🌙 Dark mode support
- 🎨 Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   └── aurora-background.tsx
│   └── aurora-demo.tsx   # Demo component with Nesway Foods branding
├── lib/                  # Utility functions
│   └── utils.ts          # cn utility for class merging
├── images/               # Static images
└── Wireframes/           # Design wireframes
```

## Components

### AuroraBackground

The main Aurora background component that creates beautiful animated gradients. It can be used as a wrapper for any content:

```tsx
import { AuroraBackground } from "@/components/ui/aurora-background";

<AuroraBackground>
  <YourContent />
</AuroraBackground>
```

### Props

- `children`: ReactNode - Content to display over the background
- `showRadialGradient`: boolean (optional) - Whether to show radial gradient mask
- `className`: string (optional) - Additional CSS classes

## Customization

The Aurora background colors and animations can be customized in `tailwind.config.js`:

- Modify the `aurora` animation duration
- Change gradient colors in the component
- Adjust opacity and blur effects

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is private and proprietary to Nesway Foods.
