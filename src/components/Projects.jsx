function Projects() {
  const projectCardStyle = {
    background: '#1a1a2e',
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
    borderRadius: '0.75rem',
    padding: '1.5rem 2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    border: '1px solid rgba(108, 99, 255, 0.2)'
  };
  const projectTitleStyle = {
    marginTop: 0,
    marginBottom: '0.5rem',
    fontSize: '1.4rem',
    color: '#e0e0e0',
    fontWeight: 700
  };
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <div className="project-card" style={projectCardStyle}>
          <div className="project-header-row">
            <h3 className="project-title" style={projectTitleStyle}>To-Do App</h3>
            <a
              className="project-link-btn"
              href="https://martinkolevv.github.io/To-Do-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </div>
          <p className="project-description">
            A simple and intuitive To-Do application built with React. The app allows users to add, complete, and remove tasks, helping them stay organized and productive. It features a clean design, responsive layout, and smooth user experience.
          </p>
        </div>
        <div className="project-card">
          <div className="project-header-row">
            <h3 className="project-title">SeeTheWorld</h3>
            <a
              className="project-link-btn"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </div>
          <p className="project-description">
            A modern travel agency website built with React. The website features destination showcases, booking functionality, and an intuitive design that helps users explore and plan their dream vacations. It demonstrates my ability to build responsive, interactive web applications with a focus on user experience and modern design principles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects 