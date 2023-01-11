import { useReducer } from "react";
import { createContext } from "react";

const initialState={
    count:0
}
////////////////////////////
export const Actions={
    INCREMENT:"increment",
    DECREMENT:"decrement" ,
    RESET:"reset"
}
////////////////////////////////
function Reducer(states,action){
    
    switch(action.type){
        case Actions.INCREMENT : return {
                                ...states,
                                count: states.count + action.payload
                            };


        case Actions.DECREMENT : return {
                                ...states,
                                count: states.count - action.payload
                            };

        case Actions.RESET : return {
                            ...states,
                            count: 0
        };                    

         default : return {
                          states
                         }      
    }
}
//////////////////////////////////////////////////////////////////////////////////
const CounterContext=createContext()

export default function CounterContextProvider({children}) {
    const [states,dispatch]=useReducer(Reducer,initialState)

    return(
        <CounterContext.Provider value={{states,dispatch}}>{children}</CounterContext.Provider>
    )
};


export {CounterContext}