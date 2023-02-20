import { useEffect, useState } from "react"
import { getdata } from "../api"
import StudentCard from "../components/StudentCard"
import { addstu, nomination, vo } from "../constants"

export default function Vote() {
    const[user,setuser]=useState<nomination[]>([])
   const[change,setchange]=useState<boolean>(false)
    useEffect(()=>{
        getnewdata()
    },[change])

    const getnewdata=()=>{
        getdata().then((res)=>{
            setuser(res.data)
        })
    }

    const votecounte=()=>{
        setchange(prev=>!prev)
    }

    // const votecounte=(id:number,data:vo)=>{
    //     voteApi(id,data).then((res)=>{
    //         getnewdata()
    //     })
    // }
    // console.log(user);



    return(
        <div className="candidate">
            {
                user.length >0 && user.map((el)=>{
                    return <StudentCard votecounte={votecounte} key={el.id} {...el}/>
                })
            }
        </div>
    )
};
