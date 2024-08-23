import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { http } from '../util/setting';
import { useSelector,useDispatch } from 'react-redux';
import { getProductDetailByIdActionThunk } from '../redux/reducers/productReducer';

const Detail = () => {
    // const [prodDetail, setProdDetail] = useState({})
    const {prodDetail} = useSelector(state=>state.productReducer);
    const dispatch = useDispatch();
    const [transformValue, setTransformValue] = useState('rotate(0deg)');
    // const navigate = useNavigate();
    const param = useParams();
    console.log(param);
    const getProductById = async () => {
        //Tạo ra action thunk (là 1 hàm có tham số là dispatch)
       const actionThunk = getProductDetailByIdActionThunk(param.prodId);
       dispatch(actionThunk);

    }
    useEffect(() => {
        //Gọi khi html load xong
        getProductById();
    }, [param.prodId])

    return (
        <div className='container'>
            <h3>Detail - ProdId: {param.prodId}</h3>
            <div className='d-flex'>
                <div className='w-25'>
                    <img style={{ transform: transformValue }} src={prodDetail?.image} alt='...' className='w-100' />

                    <div className='row'>
                        {prodDetail?.detaildetailedImages?.map((deg, index) => {
                            return <div className='col-3' key={index}>
                                <img onClick={() => {
                                    setTransformValue(deg);
                                }} src={prodDetail.image} style={{ transform: deg, border: `1px solid ${deg === transformValue ? 'orange' : '#EEE'}`, cursor: 'pointer' }} className='w-100 p-2 ' />
                            </div>

                        })}
                    </div>
                </div>
                <div className='w-75'>
                    <h3>{prodDetail.name}</h3>
                    <p>{prodDetail.description}</p>
                    {prodDetail.size?.map((size) => {
                        return <button key={size} className='me-2 btn btn-dark'>{size}</button>
                    })}
                </div>
            </div>
            <h3 className='mt-3'>Related Products</h3>
            <div className='row'>
                {prodDetail.relatedProducts?.map((prodRelate, index) => {
                    return <div className='col-4' key={index}>
                        <div className='card'>
                            <img alt='...' src={prodRelate.image} />
                        </div>
                        <div className='card-body'>
                            <h3>{prodRelate.name}</h3>
                            <p>{prodRelate.price}</p>
                            <NavLink to={`/detail/${prodRelate.id}`} className='btn btn-dark'>View detail</NavLink>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Detail