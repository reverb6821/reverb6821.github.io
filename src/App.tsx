
import './App.css'

import Navbar from './components/partials/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
function App() {

  return (
    <div className="App">
       <Navbar />
      <Home />
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
