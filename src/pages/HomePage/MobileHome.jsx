import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductApiActionThunk } from '../../redux/reducers/productReducer';
import { NavLink } from 'react-router-dom';
import useDataHome from './useDataHome';

const MobileHome = () => {
   const {arrProduct} = useDataHome(); 
  return (
    <div>
        <h3>Shoes app</h3>
        <div className='d-flex flex-wrap'>
            {arrProduct.map((prod)=>{
                return <div className='w-50 flex-item p-2 my-2 '   key={prod.id}>
                        <div className='d-flex mx-2 border border-secondary p-2' style={{minHeight:250}}>
                            <div className='w-50'>
                                <img  className='w-100' src={prod.image} alt="..." />
                            </div>
                            <div className='w-50 d-flex flex-column justify-content-between'>
                                <span className='fw-bold'>{prod.name}</span>
                                <p> {prod.description.length > 100 ? prod.description.substr(0,50) + ' ...' : prod.description  }</p>
                                <div className='d-block text-end me-2'>
                                    <NavLink to={`/detail/${prod.id}`} className={'btn btn-dark'}>Detail</NavLink>
                                </div>
                            </div>
                        </div>
                </div>
            })}
        </div>

    </div>
  )
}

export default MobileHome