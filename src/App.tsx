
import { NavBar } from './components/navbar'
import { Content } from'./components/contents';
import {Skills} from './components/skills'
import {About} from './components/about'
import {Projects} from './components/projects'
import './App.css'

function App() {
  

  return (
    <div className="App">
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <div className='pages'>
      <NavBar />
      <Content/>
      <About  />
      <Skills />
      <Projects/>
      {/* <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
      </div>
    </div>
  )
}

export default App
