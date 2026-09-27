function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a className="logo" href="#home">
          Drew<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
      </div>
    </header>
  )
}

export default Header