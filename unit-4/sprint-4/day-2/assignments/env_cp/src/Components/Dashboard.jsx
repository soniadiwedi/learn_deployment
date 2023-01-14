import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  
  function fetchdata(query){
     return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,{
        params:{
          q:query
        }
      })
  }
  const[item,setitem]=useState([]);
  const[name,setname]=useState("")
  useEffect(()=>{
    setTimeout(() => {
      fetchdata(name)
      .then((res)=>{
        setitem(res.data)
        console.log(res.data)
      }).catch((res)=>{
        console.log(res)
      })
      }, 1000)
  },[name])

  // async function fetchdata(query){
  //   let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?q=${query}`)
  //   let data=await res.json()
  //   setitem(data)
  //   console.log(data)
  // }

console.log(item)

  function searchdata(e){
   setname(e.target.value)
  }

   console.log(item)
  return (
    <div>
       <input
        onChange={searchdata}
          value={name}
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movie Username"
      />
      <div data-testid = "movie_results" >
        {/* Add movie results based of search key here */}
        {
          item.map((el)=>{
            return <div>
              <h1>Title : {el.title}</h1>
              <h1>Year : {el.year}</h1>
            </div>
          })
        }
      </div>
      
    </div>
  )
}