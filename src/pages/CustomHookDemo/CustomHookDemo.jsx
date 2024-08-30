import React from 'react'
import useGetDataApi from '../../CustomHooks/useGetDataApi'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useRoute from '../../CustomHooks/useRoute';
import useQueryCustom from '../../CustomHooks/useQueryCustom';
import { useDocumentTitle } from "@uidotdev/usehooks";

const CustomHookDemo = () => {
    //demo custom hook uidotdev
    const [count, setCount] = React.useState(0);
    useDocumentTitle(`Clicked ${count} times.`);


    //    const data = useGetDataApi('https://apistore.cybersoft.edu.vn/api/Product');
    const { navigate, setSearch } = useRoute();
    const { data, isLoading, error } = useQueryCustom('getAllProd', '/api/Product');
    if (isLoading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    console.log(data);
    return (
        <div>
            <h3>Demo custom hook</h3>
            {/* {JSON.stringify(data)} */}
            <input className='w-25 form-control d-block my-2' onChange={(e) => {
                setSearch({
                    keyword: e.target.value
                })
            }} />
            <button onClick={() => {
                navigate('/');
            }}>go home</button>

            <button className="primary" onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
        </div>
    )
}

export default CustomHookDemo