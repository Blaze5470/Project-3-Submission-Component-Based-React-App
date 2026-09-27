const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'GitHub']

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">What I Use</p>
        <h2>Technical Skills</h2>
        <p>
          Technologies I have been learning and using in my web development
          projects.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills