import React, { useState } from 'react'
import ModalContainer from '../../ContainerComponent/ModalContainer'
import Login from '../Login'
import Register from '../Register';

const DemoContainer = () => {
    const [component, setComponent] = useState(<div>Modal default</div>);
    return (
        <div>
            <h3>Container modal</h3>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Login />);
            }}>
                Login
            </button>
            <button type="button" className="btn btn-primary btn-lg mx-2" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Register />)
            }}>
                Register
            </button>
            <ModalContainer title="Login" ComponentContent={component} />
        </div>
    )
}

export default DemoContainer