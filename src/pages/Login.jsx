import axios from 'axios';
import { replace, useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie, TOKEN, USER_LOGIN } from '../util/setting';
import { loginActionAsync } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import { setFunctionSubmitModalAction } from '../redux/reducers/modalReducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      // //Xử lý gửi dữ liệu về api login của backend để lấy token lưu vào máy client
      // const res = await axios({
      //   url:'https://apistore.cybersoft.edu.vn/api/Users/signin',
      //   method:'POST',
      //   data: values
      // });
      // //Lưu token vào client (localstorage, cookie)
      // // localstorage (server không lấy được) 
      // console.log(res.data.content);
      // const token = res.data.content.accessToken; 
      // const userLogin = JSON.stringify(res.data.content);
      // localStorage.setItem(TOKEN,token);
      // localStorage.setItem(USER_LOGIN,userLogin);
      // //Lưu vào cookie
      // setCookie(TOKEN,token,7);
      //Cách 2: Sử dụng redux thunk 
      const actionAsync = loginActionAsync(values);
      dispatch(actionAsync);
    }
  })

  useEffect(() => {
    //Đưa giá trị lên redux
    const action = setFunctionSubmitModalAction(frmLogin.handleSubmit);
    dispatch(action);
    return () => {
      //Đoạn code sẽ chạy khi component mất khỏi dom
      const action = setFunctionSubmitModalAction((e) => {
        console.log('submit default');
      });
      dispatch(action);
    }
  }, []);

  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
      <div className='w-50 mx-auto'>
        <h3 className='text-center fs-1 text-white'>Login</h3>
        <div className='card'>
          <div className='card-body'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input className='form-control' id="email" name="email" onChange={frmLogin.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>password</label>
              <input className='form-control' id="password" name="password" onChange={frmLogin.handleChange} type="password" />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-dark mt-2'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login