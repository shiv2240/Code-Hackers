import Home from './Components/home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import About from './Components/about'
import Blog from './Components/blog'
import Raise from './Components/raise'
import Contact from './Components/contact'
import Login from './Components/login'
import SignIn from './Components/signin'
import DummyHome from './Components/DummyHome'
import RaiseContainer1 from './Components/raiseContainer1'
import TermsAndConditions from './Components/termCondition'

function App() {

  return (
   <>
   <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<DummyHome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/raise' element={<Raise/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/donate' element={<RaiseContainer1/>}/>
        <Route path='/term&condition' element={<TermsAndConditions/>}/>
        
      </Routes>
    </Router>
   </AuthProvider> 
   </>
  )
}

export default App
