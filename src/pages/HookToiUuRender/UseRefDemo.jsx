import React, { useRef, useState } from 'react'
import ContentChild from './ContentChild'

/*
    + useState: là dùng để lưu trữ các giá trị thay đổi trên giao diện
    + useRef: là dùng để lưu trữ các giá trị thay đổi mà không cần hiển thị trên giao diện
    UseRef là gì? khi nào sử dụng. 
        UseRef là hook chứa giá trị thay đổi sau mỗi lần render, 
        Sử dụng khi đối với các giá trị thay đổi mà không cần hiển thị trên giao diện. (Thường sử dụng đối với các input form mà không có validation ví dụ như form comment, form post bài viết, form search)
*/


const UseRefDemo = () => {
    const [state,setState] = useState(1);
    const [like,setLike] = useState({number: 1});
    const valueInputRef = useRef('');
    let value = '';
    console.log('component render')
  return (
    <div>
       <h3>useRefDemo</h3>
       <ContentChild likeProps={like} />
       <button className='btn btn-danger' onClick={()=>{
        let newLike = {...like}
        newLike.number += 1;
        setLike(newLike);
       }}><i className='fa fa-thumbs-up'></i> {like.number} Like</button>

       <h3>State: {state}</h3>
       <input type="text" className='form-control w-25' onChange={(e)=>{
            // setState(e.target.value);
            valueInputRef.current = e.target.value;
            value = e.target.value;
       }} />
       <button className='btn btn-dark mt-2' onClick={()=>{
        console.log('valueInput',valueInputRef.current);
        console.log('value của biến', value)
       }}>submit</button>

    </div>
  )
}

export default UseRefDemo