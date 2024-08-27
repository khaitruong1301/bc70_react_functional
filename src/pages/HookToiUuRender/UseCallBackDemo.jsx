import React, { memo, useCallback, useState } from 'react'

const UseCallBackDemo = () => {
    const [like, setLike] = useState(1);
    const [number,setNumber] = useState(1);
    const renderLike = () => {
        return `Bạn đã ấn ${like} like ! ` ;
    }
    const callbackRenderLike = useCallback(renderLike, [like]);
    return (
        <div>
            <div>UseCallBackDemo</div>
            <button className='btn btn-dark' onClick={()=>{
                setNumber(number + 1);
            }}>number: {number}</button>
            <button className='btn btn-dark' onClick={()=>{
                setLike(like + 1);
            }}>Like:{ like}</button>
            <CommentComponent renderLike={callbackRenderLike} />
        </div>
    )
}

export default UseCallBackDemo

const CommentComponent = memo((props) => {
    console.log('child render')
    return <div>
        <h3>child component</h3>
        {props.renderLike()}
    </div>
})