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

const App = () => {
  
  return (
    <div style={{marginBottom:'500px'}}>
        {/* <Databinding /> */}
        {/* <DemoHandleEvent /> */}
        {/* <DemoRenderCondition /> */}

        {/* <ChangeNumber /> */}
        {/* <ChangeFontSize /> */}
        {/* <TinkerApp /> */}
        {/* <ChangeCarColor /> */}
        {/* <DemoProps /> */}
        {/* <RenderWithMap /> */}
        {/* <BTProductList /> */}
        {/* <DanhSachSanPham /> */}
        {/* <EXCarStore /> */}
        {/* <ShoesPage /> */}
        <DemoLoginForm />
    </div>
  )
}

export default App