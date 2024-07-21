//rafce
import React, { useState } from 'react'
import SanPham from './SanPham'
import SanPhamChiTiet from './SanPhamChiTiet'
import GioHang from './GioHang'
const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

const DanhSachSanPham = () => {
    const [spChiTiet, setSpChiTiet] = useState({
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP", "ram": "4 GB",
        "rom": "64 GB", "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    });

    const [gioHang,setGioHang] = useState([
        { "maSP": 2, "tenSP": "Meizu 16Xs", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg",soLuong:2 },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg",soLuong:2 }
    ]);
    //state đặt ở đâu thì hàm xử lý setState sẽ nằm trên component đó
    const themGioHang = (spClick) => {
        //Xử lý setState tại hàm này
        const gioHangNew = [...gioHang,spClick];
        setGioHang(gioHangNew)
    }

    return (
        <div className='container'>
            <h3 className='text-center'>Danh sách sản phẩm</h3>
            <GioHang gioHang={gioHang} />
            <hr />
            <div className='row'>
                {data.map((sp) => {
                    return <div className='col-4' key={sp.maSP}>
                        <SanPham spItem={sp} handleChangeState={setSpChiTiet} themGioHang={themGioHang} />
                    </div>
                })}
            </div>
            <hr />
            <h3 className='mt-2'></h3>
            <SanPhamChiTiet spChiTiet={spChiTiet} />
        </div>
    )
}

export default DanhSachSanPham