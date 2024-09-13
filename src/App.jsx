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
import { BrowserRouter, Routes, Route, Navigate, Outlet, NavLink } from 'react-router-dom';
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
import ChangeFontSizeRedux from './pages/reduxDemo/ChangeFontSizeRedux'
//Cấu hình CustomBrowserHistory
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { navigateHistory } from './util/setting'
//Cấu hình react-query 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//Cấu hình react-query-dev-tool
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ShoesShopRQ from './pages/ReactQueryDemo/ShoesShopRQ'
import RQPageMaster from './MasterPages/RQPageMaster'
import UserManagementRQ from './pages/ReactQueryDemo/UserManagementRQ'
import UseRefDemo from './pages/HookToiUuRender/UseRefDemo'
import UseMemoDemo from './pages/HookToiUuRender/UseMemoDemo'
import UseCallBackDemo from './pages/HookToiUuRender/UseCallBackDemo'
import CustomHookDemo from './pages/CustomHookDemo/CustomHookDemo'
import DemoContainer from './pages/DemoContainerComponent/DemoContainer'
import PopupModalContainer from './ContainerComponent/PopupModalContainer'
import DemoContainerRedux from './pages/DemoContainerComponent/DemoContainerRedux'
import ResponsiveItem from './ContainerComponent/ResponsiveItem'
import DeskTopHome from './pages/HomePage/DeskTopHome'
import MobileHome from './pages/HomePage/MobileHome'
import HooksPageMaster from './MasterPages/HooksPageMaster'
const queryClient = new QueryClient();

const App = () => {
  const [state, setState] = useState();
  return (
    <HistoryRouter history={navigateHistory}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} position='bottom' />
          <PopupModalContainer />
          <Routes>
            <Route path='' element={<HomePageMaster />}>
              <Route index element={<HomePage />}></Route>
              <Route path='antd' element={<AntDesignDemo />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='contact' element={<Login />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='profile' element={<Profile />}></Route>
              <Route path='cart' element={<Cart />}></Route>
              <Route path='search' element={<Search />}></Route>
              <Route path='antd-table' element={<AntDesignTable />}></Route>
              <Route path='antd-table-product' element={<ProductManagementAntd />}></Route>
              <Route path="redux" element={<>
                {/* <h1>Demo redux</h1> */}
                <Outlet />
              </>}>
                <Route path='change-number' element={<ChangeNumberRedux />}></Route>
                <Route path='change-fontsize' element={<ChangeFontSizeRedux />}></Route>
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
            
            <Route path='react-query' element={<RQPageMaster />}>
                <Route path='useClient-demo' element={<ShoesShopRQ />}></Route>
                <Route path='usermutation-queryclient-demo' element={<UserManagementRQ />}></Route>
            </Route>
            
            <Route path='hooks' element={<HooksPageMaster />}>
              <Route path='useRef' element={<UseRefDemo />}></Route>
              <Route path='useCallBack' element={<UseCallBackDemo />}></Route>
              <Route path='useMemo' element={<UseMemoDemo />}></Route>
              <Route path='ch-useGetDataApi' element={<CustomHookDemo />}></Route>
              <Route path='demo-container' element={<DemoContainer />}></Route>
              <Route path='demo-container-redux' element={<DemoContainerRedux />}></Route>
              <Route path='demo-container-responsive' element={<ResponsiveItem component={<DeskTopHome />} mobileComponent={<MobileHome />} />}></Route>
            </Route>


          </Routes>
        </QueryClientProvider>
      </Provider>
      
    </HistoryRouter>
  )
}

export default App