import { useState } from "react"



export default function AddContery({AddCountry}) {
    let init={
        country:"",
        population:"",
        rank:""
    }
    const[formState,setformState]=useState(init)
/////////////////////////////////////////////////////
    function handlesubmit(e){
        e.preventDefault()
        console.log(formState)
        AddCountry(formState)
    }
    function handlechange(e){
        const{name,value,type}=e.target;
        const val= type==="nuber" ? Number(value): value 
        setformState({...formState,[name]:val})

    }

    //console.log(formState)
///////////////////////////////////////////////////////////
    return(
        <>
            <form onSubmit={handlesubmit}>
                <label>Country Name : </label>
                <input name="country" type="text" value={formState.country} onChange={handlechange}  placeholder="write here"/>
                    <br />
                <label>Population : </label>
                <input name="population" type="number" value={formState.population} onChange={handlechange} placeholder="write here"/>
                    <br />
                <label>Rank : </label>
                <input name="rank" type="number" value={formState.rank} onChange={handlechange} placeholder="write here"/>
                    <br />
                <label>Add : </label>
                <input type="submit" value="add new country" />

            </form>

        </>
    )
};
