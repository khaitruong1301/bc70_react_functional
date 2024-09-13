import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductApiActionThunk } from '../../redux/reducers/productReducer';

const useDataHome = () => {
    //Lấy arrProduct từ redux
 const {arrProduct} = useSelector(state => state.productReducer);
 //hook dispatch dùng để đưa dữ liệu lên store(redux) thông biến action{type,payload}
 const dispatch = useDispatch();
 const getAllProductApi = async ()=>{
   /*
     actionPayload: {type,payload}
     actionThunk: (dispatch2) => {//Tự định nghĩa nội dung để có dữ liệu dispatch2 lên store}
   */
   
   const actionThunk = getProductApiActionThunk();
   dispatch(actionThunk);

 }
 useEffect(() => {
   getAllProductApi()
 },[])
  return {arrProduct:arrProduct};
}

export default useDataHome