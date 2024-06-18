
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Contact from './components/Contact'
import About from './components/About'
import Register from './components/Register'
import Food from './components/services/Food'
import Emergency from './components/services/Emergency'
import Wedding from './components/services/Wedding'
import HomeServices from './components/services/HomeServices'
import Vehicle from './components/services/Vehicle'
import Shop from './components/services/Shop'
import Construction from './components/services/Construction'
import Transportation from './components/services/Transportation'
import ProfessionalServices from './components/services/ProfessionalServices'

function App() {
 
  return (
    <>
      <Navbar/>
         <Routes>
           <Route index path="" element={<MainPage/>}></Route>
           <Route index path="/contact" element={<Contact/>}></Route>
           <Route index path="/about" element={<About/>}></Route>
           <Route index path="/register" element={<Register/>}></Route>
           <Route index path="/food" element={<Food/>}></Route>
           <Route index path="/emergency" element={<Emergency/>}></Route>
           <Route index path="/wedding" element={<Wedding/>}></Route>
           <Route index path="/homeservices" element={<HomeServices/>}></Route>
           <Route path="/vehicle" element = {<Vehicle/>}></Route>
           <Route path="/shop" element ={<Shop/>}></Route>
           <Route path="/construction" element ={<Construction/>}></Route>
           <Route path="/professionalservices" element ={<ProfessionalServices/>}></Route>
           <Route path="/transportation" element ={<Transportation/>}></Route>
         </Routes>
      <Footer/>
    </>
  )
}

export default App
