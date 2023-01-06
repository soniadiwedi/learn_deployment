import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function SingleUser() {
    const [user,setuser]=useState({});
    const params=useParams()
    console.log(params)
    async function fetchSingleuser(id){
        try{
            let res= await fetch(`https://reqres.in/api/users/${id}`)
            let data=await res.json()
            setuser(data.data)
            console.log(data.data)
        }catch(err){

        }
    }

    useEffect(()=>{
        fetchSingleuser(params.user_id)
    },[params.user_id])


    return(
        <div>
            <img src={user.avatar} alt={user.first_name}/>
            <p>{user.first_name} {user.last_name}</p>
        </div>
        
    )
};
