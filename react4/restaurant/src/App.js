import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './mytemplate/About'
import BookTable from './mytemplate/BookTable'
import Footer from './mytemplate/Footer'
import Header from './mytemplate/Header'
import Home from './mytemplate/Home'
import Menu from './mytemplate/Menu'

const App = () => {
  return (
    <div>
     <Router>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = '/menu' element={<Menu/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/booktable' element={<BookTable/>}/>        
      </Routes>


    <Footer/>
     </Router>

    </div>
  )
}

export default App