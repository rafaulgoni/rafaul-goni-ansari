# Project structure

This project keeps the same portfolio experience and content, but the source code is grouped by responsibility so it is easier to understand and maintain.

```text
rafaul-3d-portfolio/
├── public/
│   ├── profile.png
│   ├── profile.webp
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   └── App.jsx
│   │
│   ├── components/
│   │   ├── assistant/
│   │   │   └── AssistantWidget.jsx
│   │   ├── common/
│   │   │   ├── IconButton.jsx
│   │   │   ├── MagneticButton.jsx
│   │   │   └── ScreenHeader.jsx
│   │   ├── navigation/
│   │   │   ├── BottomDock.jsx
│   │   │   ├── MobileNav.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx
│   │   └── three/
│   │       └── Scene.jsx
│   │
│   ├── config/
│   │   └── navigation.js
│   │
│   ├── data/
│   │   └── portfolio.js
│   │
│   ├── screens/
│   │   ├── AboutScreen.jsx
│   │   ├── ContactScreen.jsx
│   │   ├── EducationScreen.jsx
│   │   ├── ExperienceScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── ProjectsScreen.jsx
│   │   └── SkillsScreen.jsx
│   │
│   ├── styles/
│   │   └── styles.css
│   │
│   └── main.jsx
│
├── docs/
│   └── PROJECT-STRUCTURE.md
│
├── index.html
├── package.json
├── postcss.config.js
├── server.js
├── tailwind.config.js
└── vite.config.js
```

## Where to look first

- `src/app/App.jsx`: main app shell and screen navigation.
- `src/data/portfolio.js`: profile, skills, projects, and education data.
- `src/config/navigation.js`: sidebar/mobile navigation items.
- `src/screens/`: one file per portfolio screen.
- `src/components/`: reusable UI pieces.
- `src/components/assistant/AssistantWidget.jsx`: RGA Assistant.
- `src/components/three/Scene.jsx`: Three.js / React Three Fiber hero scene.
- `src/styles/styles.css`: visual styling and responsive rules.
- `public/`: profile images and the original resume PDF.
