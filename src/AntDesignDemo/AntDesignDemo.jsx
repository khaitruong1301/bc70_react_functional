import React from 'react'
//B1: import thư viện
import { Rate } from 'antd';

//B2: Các tham số cần tạo để sử dụng (không có)

const AntDesignDemo = () => {


    //B3: Sử dụng
  return (
    <div className='container'>
        <Rate character={<i className='fa fa-heart text-danger'></i>} allowHalf defaultValue={2.5} count={10} onChange={(value)=>{
            alert(value);
        }} />
    </div>
  )
}

export default AntDesignDemo