import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductApiActionThunk } from '../../redux/reducers/productReducer';
import { addProductAction } from '../../redux/reducers/cartReducer';
import { NavLink } from 'react-router-dom';
import useDataHome from './useDataHome';

const DeskTopHome = () => {
 //Lấy arrProduct từ redux
 const {arrProduct} = useDataHome();
 return (
   <div className='container'>
     <h3 className='text-center'>Shoes shop</h3>
     <div className='row'>
       {arrProduct.map((item => {
         return <div className='col-md-4 mt-2' key={item.id}>
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
   </div>)
}

export default DeskTopHome