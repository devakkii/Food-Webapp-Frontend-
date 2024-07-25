
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart' 
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify.jsx'
import MyOrder from './pages/MyOrder/MyOrder.jsx'


function App() {
  const[showlogin, setShowLogin] = useState(false)

  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowLogin}/>: <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
      <Route path='/verify' element={<Verify />} />
      <Route path="/myorder" element={<MyOrder />} />
    </Routes>
    </div>
    <Footer />
      
    </>
  )
}

export default App
