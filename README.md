# The Creative Builder

<div align="center">
  <a href="https://syreese.com/">
    <img src="https://img.shields.io/badge/LIVE_SITE-syreese.com-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Site" />
  </a>
</div>

> "Hard work, translated to the web."

A premium, highly responsive personal portfolio website designed to showcase projects, case studies, and personal insights with a raw, "hacker-aesthetic" visual style. Built with modern web technologies for performance and seamless user experience.

## 🚀 Features

- **Dynamic Project Archive**: Detailed case studies for projects like OrthoStar, VibeSTT, and HyperTyper.
- **Interactive Design**: Smooth animations and transitions using Framer Motion.
- **Responsive Layout**: Fully optimized for all device sizes with Tailwind CSS.
- **Personal Sections**: dedicated areas for Philosophy, Bookshelf, Gear, and Desk Setup.
- **Easy Content Management**: All content is driven by a central data file (`data.ts`) for easy updates.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🏁 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyreeseOfficial/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will typically start at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📝 Customization

This portfolio is designed to be easily customizable without digging into complex component logic.

### Adding New Projects
Open `src/data.ts` and add a new entry to the `PROJECTS` array. The application will automatically generate the project card and case study page.

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'my-new-project',
    title: 'My New Project',
    year: '2026',
    summary: 'A brief summary of what this is.',
    videoUrl: '/path/to/image.jpg',
    caseStudy: {
      problem: '...',
      solution: '...',
      result: '...',
      liveLink: 'https://...',
      images: ['...']
    }
  },
  // ...
];
```

You can similarly update `PHILOSOPHY`, `GEAR`, `BOOKSHELF`, and other sections in the same file.

## 🚢 Deployment

This project is optimized for deployment on modern platforms like **Vercel** or **Netlify**.

1. Connect your GitHub repository to Vercel/Netlify.
2. The platform will auto-detect the Vite settings.
3. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
