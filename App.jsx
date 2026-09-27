import Header from './components/Header'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Weather Search App',
    description:
      'A JavaScript weather application that uses the Open-Meteo API to search for weather information by city.',
    technology: 'JavaScript + API',
  },
  {
    title: 'Word Game',
    description:
      'A browser-based word guessing game that uses JavaScript to create an interactive game experience.',
    technology: 'JavaScript + HTML + CSS',
  },
  {
    title: 'To-Do App',
    description:
      'A task management application with categories, filters, an active-task counter, and local storage.',
    technology: 'JavaScript + Local Storage',
  },
]

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Building with modern web technologies</h2>
          </div>

          <div className="about-content">
            <p>
              I am a student focused on web development, programming, and
              project management. I enjoy creating websites and applications
              that are organized, responsive, and easy to use.
            </p>
            <p>
              This React project demonstrates how a larger page can be broken
              into smaller reusable components. Each component has a specific
              responsibility, making the application easier to understand and
              maintain.
            </p>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">My Work</p>
            <h2>Featured Projects</h2>
            <p>
              These project cards are generated from data and reuse the same
              React component with different props.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technology={project.technology}
              />
            ))}
          </div>
        </section>

        <Skills />
      </main>

      <Footer />
    </div>
  )
}

export default App