import axios,{AxiosResponse} from "axios"
import {  nomination, vo } from "./constants"

export const getdata=()=>{

    return axios.get("http://localhost:8080/student")
}


export const addData=async(name:string,image:string,code:string,batch:string)=>{
    let res:AxiosResponse<nomination>= await  axios.post(`http://localhost:8080/student`,{name,image,code,batch,vote:0})
    return res.data
}


export const voteApi=async(id:number,data:vo)=>{
    return axios.patch(`http://localhost:8080/student/${id}`,data)
}