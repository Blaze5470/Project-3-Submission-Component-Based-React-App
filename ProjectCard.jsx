function ProjectCard({ title, description, technology }) {
  return (
    <article className="project-card">
      <div className="project-icon" aria-hidden="true">
        {'</>'}
      </div>

      <div className="project-card-content">
        <p className="project-tech">{technology}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#home" className="project-link">
          View Project <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard