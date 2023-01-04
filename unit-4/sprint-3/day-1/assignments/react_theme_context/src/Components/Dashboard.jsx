import React, { useContext, useEffect, useState } from 'react'
import {TheameCreate} from "../Context/ThemeContextProvider"
import User from "./User"


export const Dashboard = () => {
    const {theme,funToggle}=useContext(TheameCreate);
    const [post,setpost]=useState([]);
    console.log(theme,funToggle)

    useEffect(()=>{
        fetchData()
    },[])
     async function fetchData(){
            try{
                let res=await fetch("http://localhost:3030/user")
                let data=await res.json();
                setpost(data)
                console.log(data)
            }catch(err){
                    console.log(err)
            }
    }
   

    return (
        <div data-testid = "dashboard-cont" style={{backgroundColor : theme ? "black" : "white" ,color:theme ? "white" : "black"}} >
            <select data-testid = "select-theme" onChange={funToggle}>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>

            {
                post.map((el)=>{
                    return <User key={el.id} isDarkTheme={theme} {...el}/>
                })
            }
            {/* map through the users and render User component */}
        </div>
)
}
