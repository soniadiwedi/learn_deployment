import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { CartContext } from "../context/CartpageProvider";
import Cards from "./Cards";

export default function Products() {
    const[item,setitem]=useState([]);
    const {addcart,Count}=useContext(CartContext)
    //////////////////////////////////////////////
    async function fetchData(){
        try{
            let res= await fetch (`https://fakestoreapi.com/products`)
            let data=await res.json()
            setitem(data)
            console.log(data)
        }catch(err){

        } 
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {
                item.map((el)=>{
                    return <Cards key={el.id} {...el}/>
                })
            }
        </div>
    )

};
