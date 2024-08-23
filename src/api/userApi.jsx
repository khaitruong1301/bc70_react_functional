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