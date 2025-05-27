# Matchd

A simple Vue.js application with bottom tab navigation built with Vite and TypeScript.

## Features

- ✅ Vue 3 with TypeScript
- ✅ Vite for fast development and building
- ✅ Bottom tab navigation with 3 tabs (Home, About, Profile)
- ✅ Iconify icons for beautiful SVG icons
- ✅ Vue Router for navigation
- ✅ Unit tests with Vitest
- ✅ ESLint and Prettier for code quality with semicolon enforcement
- ✅ Clean and minimal codebase

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Format code
pnpm format

# Start development server
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test:unit` - Run unit tests
- `pnpm lint` - Lint and fix code
- `pnpm format` - Format code with Prettier

## Project Structure

```
src/
├── components/
│   ├── __tests__/
│   │   └── BottomTabNavigation.spec.ts
│   └── BottomTabNavigation.vue
├── router/
│   └── index.ts
├── views/
│   ├── __tests__/
│   │   ├── AboutView.spec.ts
│   │   ├── HomeView.spec.ts
│   │   └── ProfileView.spec.ts
│   ├── AboutView.vue
│   ├── HomeView.vue
│   └── ProfileView.vue
├── App.vue
└── main.ts
```

## Testing

The project includes comprehensive unit tests for all components and views:

```bash
# Run tests
pnpm test:unit

# Run tests in watch mode
pnpm test:unit --watch
```

## Technologies Used

- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Fast build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Iconify](https://iconify.design/) - Beautiful SVG icons
- [Vue Router](https://router.vuejs.org/) - Client-side routing
- [Vitest](https://vitest.dev/) - Unit testing framework
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
