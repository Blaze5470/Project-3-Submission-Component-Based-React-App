function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Component-Based React App</p>
          <h1>Hi, I'm <span>Drew Dow.</span></h1>
          <p className="hero-description">
            I create modern websites and applications using HTML, CSS,
            JavaScript, and React.
          </p>

          <div className="hero-buttons">
            <a className="button primary-button" href="#projects">
              View My Projects
            </a>
            <a className="button secondary-button" href="#about">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="React project information">
          <div className="code-window">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>{`function App() {
  return (
    <ReactApp />
  )
}`}</pre>
            <p>Reusable components. Clean code. Modern UI.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero