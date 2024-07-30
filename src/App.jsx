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
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Search from './pages/Search'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import HeaderMenu from './components/HeaderMenu'
import HomePageMaster from './MasterPages/HomePageMaster'
import UserPageMaster from './MasterPages/UserPageMaster'
import Register from './pages/Register'
import AdminPageMaster from './MasterPages/AdminPageMaster'
import ProductManagement from './pages/ProductManagement'
import UserManagement from './pages/UserManagement'
import DashBoard from './pages/DashBoard'
import Page404 from './pages/Page404'
import Profile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'
import Detail from './pages/Detail'
const App = () => {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='' element={<HomePageMaster />}>
          <Route index element={<HomePage />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='contact' element={<Login />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='detail'>
            <Route path=':prodId' element={<Detail />}></Route>
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>

        <Route path='user' element={<UserPageMaster />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<DemoLoginForm_useFormik />}></Route>
          <Route path='forgot-pass' element={<ForgotPass />}></Route>

          <Route path='*' element={<Navigate to="./login" />} />

        </Route>


        <Route path='admin' element={<AdminPageMaster />}>
          <Route index element={<DashBoard />}></Route>
          <Route path='usermanagement' element={<UserManagement />}></Route>
          <Route path='productmanagement' element={<ProductManagement />}></Route>
          <Route path='*' element={<Page404 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App