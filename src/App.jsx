
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

import Navbar from './components/Navbar'

import MainPage from './components/MainPage'
import Contact from './components/Contact'
import About from './components/About'
import Register from './components/Register'

function App() {
 
  return (
    <>

      <Navbar/>
     
         <Routes>
           <Route index path="" element={<MainPage/>}></Route>
           <Route index path="/contact" element={<Contact/>}></Route>
           <Route index path="/about" element={<About/>}></Route>
           <Route index path="/register" element={<Register/>}></Route>

     
         </Routes>
      
      <Footer/>
      

    </>
  )
}

export default App
