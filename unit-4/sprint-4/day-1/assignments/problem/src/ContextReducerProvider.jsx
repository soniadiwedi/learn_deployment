import { useReducer } from "react"
import { createContext } from "react"

let initail={
    amount:0
}


const Reducer=(state,action)=>{
    switch(action.type){
        case("INCREMENT_AMOUNT") : 
            return { ...state, 
                amount:state.amount+action.payload                       
            }
        
        case("DECREMENT_AMOUNT"): 
             return { ...state ,
                     amount : state.amount-action.payload
        }

        case("RESET") :  
        return{
                ...state,
                amount:0
        }

        default :return {
                    state
        }
        
    }
}


export const ReducerContex=createContext()


export default function ContextReducerProvider({children}) {
    const[state,dispatch]=useReducer(Reducer,initail)

    return(
        <>
        <ReducerContex.Provider value={{state,dispatch}}>{children}</ReducerContex.Provider>
        </>
    )
};
