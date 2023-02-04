// import { loadData, saveData } from "../../utility/accessLocalStorage";
import {loadData,saveData} from "../../utils/accessLocalStorage"
import { ADD, REDUCE } from "./action";
const initialState = {
  counter: loadData("count") || 0,
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD:
        // saveData("count",state.counter+payload)
      return { ...state, counter: state.counter + payload };

    case REDUCE:
        // saveData("count",state.counter-payload)
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
}
