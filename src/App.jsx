import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './containers/home/home'
import Portfolio from './containers/portfolio/portfolio'
import Contact from './containers/contact/contact'
import Resume from './containers/resume/resume'
import Skills from './containers/skills/skills'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
