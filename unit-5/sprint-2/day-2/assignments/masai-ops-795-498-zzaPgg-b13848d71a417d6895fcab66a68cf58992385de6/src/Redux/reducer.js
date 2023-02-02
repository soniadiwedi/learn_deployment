import { ADD, REDUCE } from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
const reducer = (state,action) => {
    const{type,payload}=action
    switch(type){
        case ADD : return {...state,counter:state.counter+payload}
        case REDUCE : return {...state,counter:state.counter-payload}
        default :return state
    }
   
};

export { reducer };
