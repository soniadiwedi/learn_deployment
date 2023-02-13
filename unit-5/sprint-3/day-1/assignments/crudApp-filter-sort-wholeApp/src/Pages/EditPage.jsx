import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { patchProduct } from "../Redux/ProductReducer/action";

export default function EditPage() {
   const {id}=useParams();
   const[data,setdata]=useState("")
   const product=useSelector((store)=>{
    console.log(store);
    return store.productReducer.products
   }) 
   const dispatch=useDispatch()

   useEffect(()=>{
   const newdata=product.find((el)=> el.id===+id)
   console.log(newdata);
        newdata && setdata(newdata.price)
   },[])


   const handleEdit=()=>{
    const obj={
        price:data
    }
    dispatch(patchProduct(id,obj))
   }
   console.log(data);
    return (
        <div>
            <input style={{border:"1px solid black"}} type="number" value={data} placeholder="Price" onChange={(e)=>setdata(e.target.value)} />
            {/* <input type="url" value={data} placeholder="Image" onChange={(e)=>setdata(e.target.value)} /> */}
            <button style={{border:"1px solid black"}} onClick={handleEdit}>Edit Here</button>
        </div>
    )
};
