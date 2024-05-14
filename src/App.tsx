
import { NavBar } from './components/navbar'
import { Content } from'./components/contents';
import {Skills} from './components/skills'
import {About} from './components/about'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Content/>
      <About  />
      <Skills />
      {/* <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
