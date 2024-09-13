import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ResponsiveItem from '../ContainerComponent/ResponsiveItem'
import { TOKEN } from '../util/setting'

const HooksPageMaster = () => {
    return (
        <>
            <ResponsiveItem component={<><nav className='menu'>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./useRef'}>useRef demo</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./useCallBack'}>useCallBack demo</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./useMemo'}>useMemo demo</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./ch-useGetDataApi'}>customhook-getdataapi</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./demo-container'}>Demo container component modal</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./demo-container-redux'}>Demo container component modal - redux</NavLink>
                <NavLink className='btn btn-dark ml-2 mt-2' to={'./demo-container-responsive'}>Demo container component responsive item</NavLink>
            </nav>
                <h3>Hook tối ưu</h3>
                <hr />
            </>
            } mobileComponent={<></>} ></ResponsiveItem>
            <Outlet />
            <ResponsiveItem component={<></>} mobileComponent={<>
                <div className='bg-danger text-white py-3 row' style={{position:'fixed', bottom:0,left:0,width:'100%',height:80}}>
                    <div className='col-4 text-center'>
                        <NavLink to={'/profile'} className={'text-white'}>
                            <i className='fa fa-user fs-1'></i>
                        </NavLink>
                    </div>
                    <div className='col-4 text-center'>
                        <NavLink to={'/'} className={'text-white'}>
                            <i className='fa fa-home fs-1'></i>
                        </NavLink>
                    </div>
                    <div className='col-4 text-center'>
                        <NavLink to={'#'} className={'text-white'} onClick={()=>{
                            localStorage.removeItem(TOKEN);
                            window.location.reload();
                        }}>
                            <i className='fa fa-close fs-1'></i>
                        </NavLink>
                    </div>
                </div>
            
            </>}></ResponsiveItem>
        </>
    )
}

export default HooksPageMaster