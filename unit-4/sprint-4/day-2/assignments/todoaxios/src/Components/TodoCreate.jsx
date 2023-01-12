import axios from "axios";
import { useState } from "react"



export default function TodoCreate({addnew}) {
    const init={
        title:"",
        status:false
    }    
    const[form,setform]=useState(init);
    ///////////////////////////////////////////
    function handleChange(e){
        const{name,value}=e.target
        setform({...form,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        addnew(form)
        console.log(form)
        //postdata(form)  
    }

   

    //////////////////////////////////
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Todo : </label>
                    <input name="title" type="text" value={form.title} onChange={handleChange} />
                    <label> Submit :  </label>
                    <input type="submit" />                        
            </form>
        </div>
    )

};      
                    
 
