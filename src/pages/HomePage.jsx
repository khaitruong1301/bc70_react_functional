import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addProductAction } from '../redux/reducers/cartReducer';
const HomePage = () => {

  const [arrProduct,setArrProduct] = useState([]);
  //hook dispatch dùng để đưa dữ liệu lên store(redux) thông biến action{type,payload}
  const dispatch = useDispatch();
  const getAllProductApi = async ()=>{
    const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
    //Đưa dữ liệu từ api vào state arrProduct
    setArrProduct(res.data.content)
  }
  useEffect(() => {
    getAllProductApi()
  },[])
  return (
    <div className='container'>
      <h3 className='text-center'>Shoes shop</h3>
      <div className='row'>
        {arrProduct.map((item => {
          return <div className='col-4 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt='...' />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <NavLink to={`/detail/${item.id}`} className={'btn btn-success me-2'}>Detail</NavLink>
                <button className='btn btn-dark' onClick={()=>{
                  //Tạo ra aciton chứa dữ liệu đưa lên store
                  // const action = {
                  //   type:'ADD_PRODUCT',
                  //   payload: {...item,quantity:1}
                  // }
                  // //Đưa lên redux
                  // dispatch(action);
                  //Đưa dữ liệu lên redux slice 
                  //Tạo action slice = tay
                  // const action = {
                  //   type:'cartReducer/addProductAction',
                  //   payload: {...item,quantity:1}
                  // }
                  //Tạo action slice bằng hàm export
                  const action = addProductAction({...item,quantity:1});
                  dispatch(action)
                }}>Add to cart
                  <i className='fa fa-cart-plus'></i>

                </button>
              </div>
            </div>
          </div>
        }))}
      </div>
    </div>
  )
}

export default HomePage