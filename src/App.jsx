import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register';
import '@fontsource/roboto/400.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CoinPage from './pages/CoinPage'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Container sx={{minHeight:"100vh",width:"100%",padding:"100px 0px",backgroundColor:"#9CAFAA",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} maxWidth="xl">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
       <ToastContainer/>
      </Container>
    </Router>
  )
}

export default App
