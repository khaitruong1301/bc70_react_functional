import React from 'react'

const GioHang = (props) => {
    const {gioHang} = props;
    return (
        <div className='container'>
            <h3>Giỏ hàng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình ảnh</th>
                        <th>Tên SP</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((itemGioHang)=>{
                        return <tr>
                        <th>{itemGioHang.maSP}</th>
                        <th>
                            <img src={itemGioHang.hinhAnh} width={50} alt='...' />
                        </th>
                        <th>{itemGioHang.tenSP}</th>
                        <th>{itemGioHang.giaBan.toLocaleString()}</th>
                        <th>
                            <button className='btn btn-primary mx-2'>+</button>
                            {itemGioHang.soLuong}
                            <button className='btn btn-primary mx-2'>-</button>

                        </th>
                        <th>{(itemGioHang.soLuong * itemGioHang.giaBan).toLocaleString()}</th>
                        <th>
                            <button className='btn btn-danger me-2'>Xoá</button>
                        </th>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GioHang