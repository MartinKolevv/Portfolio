function About() {
  return (
    <section id="about" className="about-section-main">
      <h2>About Me</h2>
      <div className="about-section-wrapper">
        <div className="about-section">
          <h3>My Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">💎</span>
              <h4>C#</h4>
              <p>Backend Development</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <h4>CSS/HTML</h4>
              <p>UI/UX Design</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">⚡</span>
              <h4>JavaScript</h4>
              <p>Full Stack</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">⚛️</span>
              <h4>React</h4>
              <p>Frontend Development</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>My Strengths</h3>
          <div className="traits-container">
            <div className="trait-item">
              <span>Problem Solving</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="trait-item">
              <span>Creativity</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="trait-item">
              <span>Teamwork</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Beyond Coding</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">🎮</span>
              <h4>Gaming</h4>
              <p>Problem-solving through strategy games</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎵</span>
              <h4>Music</h4>
              <p>Exploring different genres and artists</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎬</span>
              <h4>Movies & Shows</h4>
              <p>Watching great stories and narratives</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📚</span>
              <h4>Learning</h4>
              <p>Always learning and expanding knowledge</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>My Mission</h3>
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon">🎯</div>
            </div>
            <p>To build innovative, user-centric applications that solve real-world problems 
            while maintaining clean, efficient, and scalable code.</p>
            <div className="mission-values">
              <span className="value-tag">Quality</span>
              <span className="value-tag">Innovation</span>
              <span className="value-tag">User-First</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About 