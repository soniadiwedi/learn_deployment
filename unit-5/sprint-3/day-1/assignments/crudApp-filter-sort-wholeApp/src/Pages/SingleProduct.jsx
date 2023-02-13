import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const[data,setdata]=useState([])
    const params=useParams()
    const getdata =(id)=>{
        axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
            console.log(res);
            setdata(res.data)
        }).catch((e)=>{
            console.log(e);
        })
    }

    console.log(data);
    useEffect(()=>{
        getdata(params.id)
    },[params.id])

    return (
        <>
           <img src={data.thumbnail} width="40%" />
           <p>{data.price}</p>
        </>
    )
};
