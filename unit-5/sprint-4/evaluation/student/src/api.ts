import axios,{AxiosResponse} from "axios"
import {  nomination, vo } from "./constants"

export const getdata=()=>{

    return axios.get("http://localhost:8080/student")
}


export const addData=async(name:string,image:string,code:string,batch:string)=>{
    let res:AxiosResponse<nomination>= await  axios.post(`http://localhost:8080/student`,{name,image,code,batch,vote:0})
    return res.data
}


export const resultapi=async()=>{
    let res= axios.get(`http://localhost:8080/student/?_page=1&_limit=3&_sort=vote&_order=desc`)
    return res
}


export const voteapi=async(id:number)=>{
    let res=await axios.get(`http://localhost:8080/student/${id}`)
    let newdata={vote:res.data.vote+1}
    let data=await axios.patch(`http://localhost:8080/student/${id}`,newdata)
}