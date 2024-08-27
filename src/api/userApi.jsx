//api createuser,apigetalluser

import { http } from "../util/setting"


export const getAllUserApi = async () => {
    const res = await http.get('https://apistore.cybersoft.edu.vn/api/Users/getAll');
    return res.data.content;
}


export const registerApi = async (userRegister) => {
    const res = await http.post('https://apistore.cybersoft.edu.vn/api/Users/signup',userRegister);
    return res.data.content;
}


export const getAllUserPagingApi = async (query) => {
    console.log(query.queryKey)
    // console.log({queryKey})
    // const {pageIndex,pageSize} = query.queryKey[1];
    const pageIndex = query.queryKey[1] ?? 1;
    const pageSize = query.queryKey[2] ?? 10;
    const res = await http.get(`https://apistore.cybersoft.edu.vn/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}
`);

    return res.data.content;
}