
import { useReducer ,useRef, useState} from 'react';
import './App.css';


function Reducer (state,action){
    switch(action.type){
      case 'inc': return {
        ...state, amount:  state.amount+action.amount
      }
      case "dec": return {
        ...state, amount: state.amount-action.amount
      }
    }
}


function App(){

  const[state,dispatch]=useReducer(Reducer,{amount:0})

  const[add,setadd]=useState("")
  const[subtract,setsubract]=useState("");

  const handleClick=()=>{
    let pass={type:'inc',amount:add}
    dispatch(pass)
    setadd(0)
  }

  const handledelete=()=>{
    let pass={type:'dec',amount:subtract}
    dispatch(pass)
    setsubract(0)
  }
return (
  <>
  <h1>Amount: {state.amount}</h1>
  <input placeholder='Add here' onChange={(e)=>setadd(Number(e.target.value))} type="number"/>
  <button onClick={handleClick}>Add</button>
  <br></br>
  <input type={Number} onChange={(e)=>setsubract(e.target.value)} />
  <button onClick={handledelete}>Delete</button>
  </>
)

}



















////////////////////////////////////////////////////////

// function App() {
//   const object={
//     amount:0
//    }
 
//  /////////////////////////////////////
//  const [state,dispatch]=useReducer(Reducer,{amount:0})



//  const initialobj= useRef(object)
//   function handlechange(e){
//     initialobj.current.amount=Number(e.target.value);
//   }
//  console.log(initialobj)

 
// /////////////////////////////////////////
//   function handleAdd(){
//     const updateobj={...initialobj.current,type:'inc' }
    
//     dispatch(updateobj)
//     console.log(updateobj)
//   }
// //////////////////////////////////////////
//   function handleDel(){
//     const deletobj={...initialobj.current,type:'dec'}
   
   
//     dispatch(deletobj)

    
//     console.log(deletobj)
//   }
//   return (
//     <div className="App">
//         <h1>{state.amount}</h1>
//       <input type="number"  onChange={(e)=>{handlechange(e)}} />
//       <button onClick={handleAdd}>Add</button>
//       <br>
//       </br>
//       <input type="number" onChange={(e)=>{handlechange(e)}} />
//       <button onClick={handleDel}>Delete</button>
//     </div>
//   );
// }

export default App;
