import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { registerApi } from '../../api/userApi';

const RegisterFormRQ = () => {
    const [userRegister, setUserRegister] = useState({
        id: '',
        name: '',
        phone: '',
        gender: true,
        email: ''
    });
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['registerUser'],
        mutationFn:registerApi,
        onSuccess: (data) => {
            console.log('data',data)
            //Thành công
            queryClient.invalidateQueries('getAllUser')
        },
        onError: (err) => {
            //thất bại
        }
    })

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        setUserRegister({
            ...userRegister,
            [id]: value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userRegister);
        //Sau khi submit sẽ gọi api = mutation

        mutation.mutateAsync(userRegister);



    }
    console.log('render')
    return (
        <div className='container'>
            <div>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit} >
                    {/* ID Field (Hidden) */}
                    < input type="hidden" id="id" defaultValue={0} value={userRegister.id} />
                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" value={userRegister.email} onChange={handleChangeInput} />
                    </div>
                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" value={userRegister.password} onChange={handleChangeInput} />
                    </div>
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" value={userRegister.name} onChange={handleChangeInput} />
                    </div>
                    {/* Gender Field */}
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" id="gender" value={userRegister.gender} onChange={handleChangeInput}>
                            <option value="true">Male</option>
                            <option value="false">Female</option>
                        </select>
                    </div>
                    {/* Phone Field */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input onChange={handleChangeInput} type="text" className="form-control" id="phone" placeholder="Enter your phone number" value={userRegister.phone} />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>

        </div >
    )
}

export default RegisterFormRQ