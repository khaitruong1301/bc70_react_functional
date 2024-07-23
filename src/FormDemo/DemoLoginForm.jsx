import React, { useState } from 'react'

const DemoLoginForm = () => {
    const [userLogin,setUserLogin] = useState({
        email:'',
        password:''
    })
    console.log(userLogin);
    const handleSubmit = (e) => {
        e.preventDefault();//Chặn reload browser
        console.log('submit',userLogin);
 
    }
    const handleChangeInput = (e) => {
        const {name,value} = e.target;
        setUserLogin({
           ...userLogin,
            [name]:value
        })
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className='card-header bg-dark text-white text-center'>
                    <h3>Login</h3>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' id="email" name='email' placeholder='input email' onChange={handleChangeInput} />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' id="password" name='password' type='password' placeholder='input password' onChange={handleChangeInput} />
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success mt-2'>Login</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default DemoLoginForm