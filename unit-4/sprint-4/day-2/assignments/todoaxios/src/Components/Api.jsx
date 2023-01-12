import axios from "axios"


export default function getdata(params={}){
    return axios.get(`http://localhost:8080/todo`,{
        params:{
            _page:params.page,
            _limit:params.limit,         
        }
    })  
}




  export function postdata(data={}){
        return axios({
            method:'post',
            url:`http://localhost:8080/todo`,
            data:{
                title:data.title,
                status:data.status
            }
        })
    
}



export function DeleteFun(id){
    return axios({
        method:'delete',
        url:`http://localhost:8080/todo/${id}`
    })
}


export function Patchfun(id,status){
    return axios({
        method:'patch',
        url:`http://localhost:8080/todo/${id}`,
        data:{
            status: !status
        }
    })
}