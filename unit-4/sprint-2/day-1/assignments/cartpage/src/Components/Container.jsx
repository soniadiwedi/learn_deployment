import SareItem from "./SareItem"
import TotalPrice from "./TotalPrice"
import { useState } from "react"
function Container(){
 
    const data=[
       { id:new Date().toLocaleTimeString()+Math.random()*9999,
        title:"Noodles",
        price:100,
        label:"₹",
        quantity:1
    },  { id:new Date().toLocaleTimeString()+Math.random()*9999,
        title:"Biryani",
        price:20,
        label:"₹",
        quantity:2
    },  { id:new Date().toLocaleTimeString()+Math.random()*9999,
        title:"Noodles",
        price:10,
        label:"₹",
        quantity:1
    }

    ]    
    const[item,setitem]=useState(data)
    function increaseItem(id){
        setitem((prev)=>{
            return prev.map((el)=>{
                return el.id===id?{...el,quantity:el.quantity+1}:el;
            })
        })
    }
    function decreaseItem(id){
        setitem((prev)=>{
            return prev.map((el)=>{
                return el.id===id && el.quantity>0?{...el,quantity:el.quantity-1}:el;
            })
        })
    }
    
            
return(
    <div>
        <h1>Cart Component</h1>
        
        <SareItem data={item} increaseItem={increaseItem} decreaseItem={decreaseItem}/>
        <h3>Total : <TotalPrice item={item}/></h3>
    </div>
)
}
export default Container