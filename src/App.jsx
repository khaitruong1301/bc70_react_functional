//rafce
import React, { useState } from 'react'
import Databinding from './databinding/Databinding'
import DemoHandleEvent from './eventHandler/DemoHandleEvent'
import DemoRenderCondition from './renderCondition/DemoRenderCondition'
import ChangeNumber from './DemoState/ChangeNumber'
import ChangeFontSize from './DemoState/ChangeFontSize'
import TinkerApp from './DemoState/TinkerApp'
import ChangeCarColor from './DemoState/ChangeCarColor'
import DemoProps from './props/DemoProps'
import RenderWithMap from './RenderWithMap/RenderWithMap'
import BTProductList from './RenderWithMap/BTProductList/BTProductList'
import DanhSachSanPham from './LiftingStateup/DanhSachSanPham'
import EXCarStore from './LiftingStateup/EXCarStore/EXCarStore'
import ShoesPage from './ApiDemo/ShoesPage'
import DemoLoginForm from './FormDemo/DemoLoginForm'
import DemoLoginForm_useFormik from './FormDemo/DemoLoginForm_useFormik'
//Cấu hình react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Search from './pages/Search'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
const App = () => {

  return (
    <BrowserRouter>
      <header className='bg-dark text-white'>
        <nav className='p-2'>
          <a href='/' className='mx-2 text-white'>Home</a>
          <a href='/login' className='mx-2 text-white'>Login</a>
          <a href='/about' className='mx-2 text-white'>About</a>
        </nav>
      </header>
      <Routes>
        {/* <Route path='' element={<HomePage />}></Route> */}
        <Route index element={<HomePage />}></Route>
        <Route path='home' element={<HomePage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App