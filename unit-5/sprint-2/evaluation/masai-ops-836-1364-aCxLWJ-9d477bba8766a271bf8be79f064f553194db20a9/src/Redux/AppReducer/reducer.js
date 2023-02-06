import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_API_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coffeeData: action.payload,
        restaurantData: action.payload,
        employeeData: action.payload,
      };

    case types.GET_API_FAILURE:
      return{...state,isError:true}

    default:
      return state;
  }
};

export { reducer };
