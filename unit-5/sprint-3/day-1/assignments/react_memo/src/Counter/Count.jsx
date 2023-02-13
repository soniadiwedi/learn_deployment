import { useEffect, useState } from 'react';
import Todo from './Todo';


export default function Count() {
    const[count,setcount]=useState(0)

useEffect(()=>{
  setTimeout(()=>{
      setcount((prev)=>{
        return prev+1
      })
  },1000)

 
})
    return(
        <div>
            <h1>Counte : {count}</h1>
            <Todo/>
        </div>
    )
};


