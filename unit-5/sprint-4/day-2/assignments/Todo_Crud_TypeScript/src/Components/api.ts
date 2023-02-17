import axios, { AxiosResponse } from "axios"


export const getdata=async()=>{
    
        let res:AxiosResponse=  await axios.get("http://localhost:8080/todos")
        // console.log(res.data);
        return res.data   
}


export const postData=async(title:string)=>{
        // let res:AxiosResponse=await axios.post(`http://localhost:8080/todos`,{
        //         title,
        //         status:false
        // })

        let res:AxiosResponse=await axios({
                url:"http://localhost:8080/todos",
                method:"post",
                data:{
                        title,status:false
                }
        })
        return res.data
}

export const patchdata=async(id:number,status:boolean)=>{
        let res:AxiosResponse=await axios({
                url:`http://localhost:8080/todos/${id}`,
                method:"patch",
                data:{
                        status:!status
                }
        })
      return res
}


export const deletetodos=async(id:number)=>{
        let res:AxiosResponse=await axios({
                url:`http://localhost:8080/todos/${id}`,
                method:"delete"
        })
        return res
}