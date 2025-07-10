import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
