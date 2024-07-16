//rafce
import React from 'react'
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
        <BTProductList />
    </div>
  )
}

export default App