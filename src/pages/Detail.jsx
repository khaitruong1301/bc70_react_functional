import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [prodDetail,setProdDetail] = useState({})
    const param = useParams();
    console.log(param);
    const getProductById = async () => {
        const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodId}`);
        const jsonRes = await res.json();
        console.log(jsonRes.content)
        //setState sau khi lấy dữ liệu api về
        setProdDetail(jsonRes.content);
    }
    useEffect(()=>{
        //Gọi khi html load xong
        getProductById();
    },[])

  return (
    <div className='container'>
        <h3>Detail - ProdId: {param.prodId}</h3>
        <div className='w-25'>
            <img src={prodDetail.image} alt='...' className='w-100' />
        </div>
    </div>
  )
}

export default Detail