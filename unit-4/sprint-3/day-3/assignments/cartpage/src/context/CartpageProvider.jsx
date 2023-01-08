import { useState } from "react"
import { createContext } from "react"

const CartContext=createContext()

export default function CartpageProvider({children}) {
    const[item,setitem]=useState([]);

    function addcart(obj){
        setitem((prev)=>{
            return [...prev,obj]
        })
    }
//--------------------------------------
console.log(item)
function Count(){
    return item.length
}

    return <div>
        <CartContext.Provider value={{addcart,Count}}>
            {children}
            </CartContext.Provider>
    </div>
};


export {CartContext}