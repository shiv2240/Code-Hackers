import Home from './Components/home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './Components/about'
import Blog from './Components/blog'
import Pages from './Components/pages'
import Contact from './Components/contact'


function App() {


  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
