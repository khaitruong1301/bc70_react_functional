/*
    custom hook tương tự component tuy nhiên kết quả trả về không phải là jsx mà là giá trị (string, bool, object, num...)
    Thay thế 1 phần HOC: Higher order component
*/
import React, { useEffect, useState } from 'react'

const useGetDataApi = (url) => {

    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await fetch(url);
        const resJson = await res.json();
        console.log(resJson)
        setData(resJson.content);
    }
    useEffect(() => {
        fetchApi();
    },[])
    return data;
}

export default useGetDataApi