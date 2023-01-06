import React, { useEffect, useState } from 'react'

export default function AllProducts() {
  const[user,setusers]=useState([])
  const[loding,setloading]=useState(false)
  const[err,seterr]=useState(false)

  async function fetchData(){
    setloading(true)
      try{
        let res= await fetch ("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
        let data=await res.json()
        console.log(data.data)
        setusers(data.data)
        setloading(false)
      }catch(err){
        console.log(err)
        seterr(true)
        setloading(false)
      }
  }

  ///////////////////////////////////////////////////////
  useEffect(()=>{
    fetchData()
  },[])
  ////////////////////////////////////////////////
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)" ,rowGap:"10px",columnGap:"10px"}} >
          {/* Map the below div against product data */}
          {
            user.map((el)=>{
              return (
                <div key={el.id} style={{border:"solid 1px black"}}>
                <h3 className = "name">{el.title} </h3>
                <div className= "brand">{el.brand}</div>
                <div className = "price">{el.price}</div>
            </div>
              )
            })

          }
           
      </div>
    </div>
  )
}