import { useEffect, useState } from "react"
import { getdata, voteApi } from "../api"
import StudentCard from "../components/StudentCard"
import { addstu, nomination, vo } from "../constants"

export default function Vote() {
    const[user,setuser]=useState<nomination[]>([])
   
    useEffect(()=>{
        getnewdata()
    },[])

    const getnewdata=()=>{
        getdata().then((res)=>{
            setuser(res.data)
        })
    }


    const votecounte=(id:number,data:vo)=>{
        voteApi(id,data).then((res)=>{
            getnewdata()
        })
    }
    // console.log(user);



    return(
        <div>
            {
                user.length >0 && user.map((el)=>{
                    return <StudentCard votecounte={votecounte} key={el.id} {...el}/>
                })
            }
        </div>
    )
};
