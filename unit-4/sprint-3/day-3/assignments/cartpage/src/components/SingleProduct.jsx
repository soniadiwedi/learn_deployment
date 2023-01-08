import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartpageProvider";

export default function SingleProduct() {
    const[item,setitem]=useState({});
    const param=useParams()
    const{addcart}=useContext(CartContext)
console.log(param);
    async function fetchSingledata(id){
        try{
            let res=await fetch(`https://fakestoreapi.com/products/${id}`)
            let data= await res.json()
            setitem(data)
            console.log(data)
        }catch(err){

        }   
    }
/////////////////////////////////////////////
useEffect(()=>{
    fetchSingledata(param.products_id)
},[param.products_id])
/////////////////////////////////////////
function AddingCart(){
    addcart(item)
}
    return <div>
         <img src={item?.image} alt={item.title} width="20%"/>
        <p>{item?.title}</p>
        <h4>{item?.price}</h4>
        <button onClick={AddingCart}>Add to Cart</button>

    </div>
};
