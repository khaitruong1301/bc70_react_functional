import React from 'react'
import Login from '../Login'
import { setTitleContentModalAction } from '../../redux/reducers/modalReducer'
import useRedux from '../../CustomHooks/useRedux'
import Register from '../Register'

const DemoContainerRedux = () => {
    const {dispatch} = useRedux();
    return (
        <div>
            <h3>Modal container redux</h3>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                //Đưa dữ liệu lên redux qua payload Action
                const dataPayload = {
                    title: 'Login',
                    contentComponent: <Login />
                }
                const action = setTitleContentModalAction(dataPayload);
                //Dispatch lên redux
                dispatch(action);
            }}>
                Login
            </button>

            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                //Đưa dữ liệu lên redux qua payload Action
                const dataPayload = {
                    title: 'Register',
                    contentComponent: <Register />
                }
                const action = setTitleContentModalAction(dataPayload);
                //Dispatch lên redux
                dispatch(action);
            }}>
                Register
            </button>

        </div>
    )
}

export default DemoContainerRedux