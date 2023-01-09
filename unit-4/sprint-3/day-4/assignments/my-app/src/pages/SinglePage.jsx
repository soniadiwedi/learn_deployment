import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function SinglePage() {
    const[item,setitem]=useState({})
    let params=useParams()
    
    async function fetchSingleData(id){
        try{
            let res=await fetch(`http://localhost:3000/products/${id}`)
            let data=await res.json().then((response)=>{
                setitem(response)
                console.log(response)
            })
           
        }catch(err){

        }   
    }


    useEffect(()=>{
        fetchSingleData(params.product_id)
    },[params.product_id])

    return (
        <div>
           <img src={item.image} width='30%'/>
                    <p>{item.category}</p>
                    <p>{item.title}</p>          
                    <p>{item.price}</p>
        </div>
    )
};
