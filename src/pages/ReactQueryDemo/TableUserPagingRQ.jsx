import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { useQuery,keepPreviousData } from '@tanstack/react-query';
import { getAllUserPagingApi } from '../../api/userApi';


const TableUserPagingRQ = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize,setPageSize] = useState(10);
    const { data, isLoading, error } = useQuery({
        queryKey: ['userPaging', pageIndex,pageSize],
        // queryKey: ['userPaging', {pageIndex,pageSize}],
        queryFn: getAllUserPagingApi,
        staleTime: 1 * 1000,
        gcTime: 1.5 * 1000, 
        refetchOnWindowFocus:true,
        placeholderData: keepPreviousData
    });
    if (error) {
        return <div className='bg-danger text-white'>Error</div>
    }
    if (isLoading) {
        return <div className=''>Loading ....</div>
    }
    const { items } = data;
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            render: (data, record) => {
                return record.gender ? <span className='badge bg-success'>Male</span> : <span className='badge bg-danger'>Female</span>
            }
        }
    ];
    return <>
        <Table columns={columns} dataSource={items} rowKey={'id'} pagination={{pageSize:data.pageSize,current:pageIndex,total:data.totalRow, onChange: (page,size)=>{
            setPageIndex(page);
            setPageSize(size)
        }}}/>
    </>
};
export default TableUserPagingRQ;


