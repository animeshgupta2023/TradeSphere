import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './landingPage/home/HomePage'
import Signup from './landingPage/signup/Signup'
import AboutPage from './landingPage/about/AboutPage'
import ProductsPage from './landingPage/products/ProductsPage'
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from './landingPage/support/SupportPage'
import Navbar from './Navbar'
import Footer from './Footer'
import NotFound from './NotFound'

function App() {
  return (
    <>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductsPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
