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
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
//import css
import './assets/styles/index.css';
import AddProduct from './pages/ProductManagement/AddProduct'
import EditProduct from './pages/ProductManagement/EditProduct'
import Product from './pages/ProductManagement/Product'
import AntDesignDemo from './AntDesignDemo/AntDesignDemo'
import AntDesignTable from './AntDesignDemo/AntDesignTable'
import ProductManagementAntd from './AntDesignDemo/ProductManagementAntd'
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/store'
import ChangeNumberRedux from './pages/reduxDemo/ChangeNumberRedux'


const App = () => {

  const [state, setState] = useState();

  return (

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<HomePageMaster />}>
            <Route index element={<HomePage />}></Route>
            <Route path='antd' element={<AntDesignDemo />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='contact' element={<Login />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='antd-table' element={<AntDesignTable />}></Route>
            <Route path='antd-table-product' element={<ProductManagementAntd />}></Route>

            <Route path="redux" element={<>
                <h1>Demo redux</h1>
                <Outlet />
              </>}>
                <Route path='change-number' element={<ChangeNumberRedux />}></Route>
            </Route>


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
            <Route path='productmanagement' element={<ProductManagement />}></Route>
            <Route path='add-product' element={<AddProduct />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='product'>
              <Route path=':id' element={<Product />}></Route>
            </Route>
            <Route path='product-edit'>
              <Route path=':id' element={<EditProduct />}></Route>
            </Route>



            <Route path='usermanagement' element={<UserManagement />}></Route>

            {/* <Route path='*' element={<Page404 />} /> */}

          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App