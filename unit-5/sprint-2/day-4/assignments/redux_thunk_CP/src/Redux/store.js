import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

const customMiddleware = (store) => (next) => (action) => {
  // console.log("store",store)
  // console.log("next",next)
  // console.log("action",action)
  if (typeof action === "function") {
    
    return action(store.dispatch);
  }
  return next(action);
};

const store = legacy_createStore(reducer, applyMiddleware(customMiddleware));

export { store };

