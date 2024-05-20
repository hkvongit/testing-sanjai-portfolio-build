import { NavBar } from './components/navbar' 
import { Content } from'./components/contents'; 
import {Skills} from './components/skills' 
import {About} from './components/about' 
import {Projects} from './components/projects' 
import './App.css' 
import { BrowserRouter, Route } from 'react-router-dom'; 
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
        <About /> 
        <Skills /> 
        <Projects/> 
    </div> 
</div> 
) 
} export default App