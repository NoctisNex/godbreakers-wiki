# Godbreakers Wiki

A comprehensive, community-driven wiki for the game Godbreakers. This wiki provides detailed information about fragments, equipment, conditions, godbreak abilities, and game mechanics.

## Features

- 🎮 Complete database of game items and abilities
- 🔍 Fast client-side search
- 📱 Fully responsive design
- ⚡ Built with Vite for lightning-fast performance
- 🎨 Clean, minimalist aesthetic using Pico CSS
- 🚀 Deployed on GitHub Pages

## Technology Stack

- **Vite** - Development server and build tool
- **Vanilla JavaScript** - No framework bloat
- **Pico CSS** - Minimal, semantic CSS framework
- **GitHub Pages** - Free, reliable hosting

## Development

### Prerequisites

- Node.js 18+ and npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/NoctisNex/godbreakers-wiki.git
cd godbreakers-wiki
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
godbreakers-wiki/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── src/
│   ├── main.js            # Application entry point
│   ├── router.js          # Client-side routing
│   ├── components/        # Reusable UI components
│   │   ├── card.js        # Card and modal components
│   │   └── search.js      # Search functionality
│   ├── pages/             # Page components
│   │   ├── home.js
│   │   ├── fragments.js
│   │   ├── equipment.js
│   │   ├── conditions.js
│   │   ├── abilities.js
│   │   └── guide.js
│   ├── data/              # JSON data files
│   │   ├── fragments.json
│   │   ├── equipment.json
│   │   ├── conditions.json
│   │   └── abilities.json
│   ├── styles/
│   │   └── main.css       # Custom styles
│   └── utils/
│       └── dataLoader.js  # Data loading utilities
└── public/
    └── Media/             # Game assets and images
```

## Adding Content

### Adding New Items

To add new items to the wiki, edit the JSON files in `src/data/`:

1. **Fragments** (`src/data/fragments.json`):
```json
{
  "id": "unique-id",
  "name": "Fragment Name",
  "category": "arms|chest|feet|legs|shoulder",
  "image": "/public/Media/Fragments/Category/Image.png",
  "description": "Main description",
  "baseDescription": "Base effect",
  "upgradedDescription": "Upgraded effect"
}
```

2. **Equipment** (`src/data/equipment.json`):
```json
{
  "id": "unique-id",
  "name": "Equipment Name",
  "type": "orb|trap|generator|etc",
  "image": "/public/Media/Equipments/Image.png",
  "description": "Description",
  "effect": "Effect details"
}
```

3. **Conditions** (`src/data/conditions.json`):
```json
{
  "id": "unique-id",
  "name": "Condition Name",
  "type": "buff|debuff|dot|effect",
  "image": "/public/Media/Conditions/Type/Image.png",
  "description": "Description",
  "effect": "Effect details"
}
```

4. **Abilities** (`src/data/abilities.json`):
```json
{
  "id": "unique-id",
  "name": "Ability Name",
  "image": "/public/Media/Godbreak Abilities/Image.png",
  "description": "Description",
  "effect": "Effect details",
  "cooldown": "Cooldown time"
}
```

### Adding Images

Place images in the appropriate `public/Media/` subdirectory and reference them in the JSON files.

## Deployment

### Automatic Deployment (Recommended)

The wiki automatically deploys to GitHub Pages when you push to the `main` branch.

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your built site
3. Deploy the contents of `dist` to your hosting provider

## Contributing

This is a community wiki! Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Add your content or improvements
4. Submit a pull request

## License

This is a fan-made project. Godbreakers and all related assets are property of their respective owners.

## Credits

Created with ❤️ by the Godbreakers community
