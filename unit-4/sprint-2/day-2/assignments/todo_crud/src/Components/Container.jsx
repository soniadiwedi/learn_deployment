import React, { useState, useEffect } from 'react';
import InputTodo from './InputTodo';
import AllTodo from './AllTodo';
function Container(){
const [text,setInput]=useState("");
const [fData,setData]=useState([])
const url='http://localhost:3030/todo';
//------------------------------------------
useEffect(()=>{  
    fetchData();
    
},[]);
//-----------------fetching the data-----------------
const fetchData=async()=>{
    try{
        let response= await fetch(url);
        if(response.ok){
            let data= response.json();
            setData(data)
            console.log(data)
        }
    }catch(err){
        console.log(err)
    }
}
//--------------------------------------------------------

function handleInput(e){
    setInput(e.target.value)
    console.log(e)
}

function addNewTodo(){
    let newTodo={
        title:text,
        status:false,
    }
    
    displayData(newTodo);
    console.log(newTodo)
    
}
//---------displaytodo------------------
const displayData=async(newTodo)=>{
    try{
        let res=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newTodo)
        });
        if(res.ok){
            let data=await res.json()
           
            setData((prev)=>[...prev,data])
            //console.log(fData);
            setInput("")
        }
    }catch(err){
        alert (err)
    }
}
//----------------------------------------------
function toggleStatus(id){
    setData((prev)=>{
        return prev.map((el)=>{
            return el.id==id?{...el,status:!el.status}:el
        })
    })
}
//--------------------------------------------------
function deletetodo(id){
    
}
    return (
        <div>
            <h2>TODO'S</h2>
            <InputTodo handleInput={handleInput} addNewTodo={addNewTodo}/>
            <AllTodo todo={fData} toggleStatus={toggleStatus} deletetodo={deletetodo}/>
        </div>
    )
}

export default Container