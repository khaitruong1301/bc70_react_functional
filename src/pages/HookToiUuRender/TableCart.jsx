import React, { memo } from 'react'

const TableCart = (props) => {
    console.log('child render');
    return (
        <div>
            <table className='table'>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
                {props.cart.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}
export default memo(TableCart)