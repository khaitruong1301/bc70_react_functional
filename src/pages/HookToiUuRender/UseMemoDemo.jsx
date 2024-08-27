import React, { useMemo, useState } from 'react'
import TableCart from './TableCart';

//useMemo: Dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi thị giá trị đó mới tạo mới lại
const cart = [
    { id: 1, name: 'prod 1', price: 1000 },
    { id: 2, name: 'prod 2', price: 2000 },
    { id: 3, name: 'prod 3', price: 3000 },
];
const UseMemoDemo = () => {
    const [like, setLike] = useState(1);
 
    // const memoCart = useMemo(() => cart, []);
    return (
        <div>
            <h3>UseMemoDemo</h3>
            <button className='btn btn-dark' onClick={() => {
                setLike(like + 1);
            }}>
                <i className='fa fa-thumbs-up'>{like}</i>
            </button>

            <TableCart cart={cart} />
        </div>
    )
}

export default UseMemoDemo