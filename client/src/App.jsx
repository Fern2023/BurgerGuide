import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HeroSection from './Components/Hero'
import BurgerRating from './Components/BurgerRating'



// import BurgerStores from './Components/BurgerStores'
// import { Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar />
 <HeroSection />
  <BurgerRating />
{/* <Routes>
 <Route path='/BurgerStores' element={<BurgerStores />} />
 </Routes> */}
 <Footer />
    </>
  )
}

export default App
