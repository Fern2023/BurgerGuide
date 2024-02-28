
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import './App.css'



function App() {


  return (


    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/posts' element={<Post />} />

      </Routes>
      <Footer />
    </>


  )
}

export default App
