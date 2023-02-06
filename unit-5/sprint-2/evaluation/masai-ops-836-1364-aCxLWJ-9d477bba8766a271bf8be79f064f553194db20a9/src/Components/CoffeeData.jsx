import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CoffeeData() {
  const data=useSelector((store)=>console.log(store.coffeeData))
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(CoffeeData)
  },[])


  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data">
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
      </div>
    </div>
  );
}
