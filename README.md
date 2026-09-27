# Project 3 - Component-Based React App

A Vite-powered React portfolio application created for Project 3.

## Project Requirements

This project demonstrates:

- A Vite React project
- Five separate React components
- Reusable components
- Props
- A component reused three times with different data
- Custom CSS styling
- Organized project files
- Responsive design
- No state or advanced interactivity required

## Components

The project includes:

- `Header.jsx`
- `Hero.jsx`
- `ProjectCard.jsx`
- `Skills.jsx`
- `Footer.jsx`

### Props Example

`ProjectCard` receives these props:

```jsx
<ProjectCard
  title="Weather Search App"
  description="..."
  technology="JavaScript + API"
/>
```

The `ProjectCard` component is reused three times with different project data.

## Run the Project

Make sure Node.js is installed.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```text
project-3-react-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Author

Drew Dow
