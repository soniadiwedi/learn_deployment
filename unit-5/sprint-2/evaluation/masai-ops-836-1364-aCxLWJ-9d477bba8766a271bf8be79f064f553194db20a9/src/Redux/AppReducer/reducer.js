import * as types from "./actionType";

const initialState = {
  isLoading: false,
isError: false,
coffeeData: [],
restaurantData: [],
employeeData : []
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.GET_COFFEE_DATA_REQUEST:
      return {...state,isLoading:true};
      case types.GET_EMPLOYEE_DATA_REQUEST:
        return {...state,isLoading:true};
        case types.GET_RESTAURANT_DATA_REQUEST:
          return {...state,isLoading:true};
          case types.GET_COFFEE_DATA_SUCCESS:
            return {...state,isLoading:false,coffeeData:payload}
            case types.GET_EMPLOYEE_DATA_SUCCESS:
            return {...state,isLoading:false,employeeData:payload}
            case types.GET_RESTAURANT_DATA_SUCCESS:
            return {...state,isLoading:false,restaurantData:payload}
            case types.GET_COFFEE_DATA_FAILURE:
              return {...state,isLoading:false,isError:true}
              case types.GET_EMPLOYEE_DATA_FAILURE:
              return {...state,isLoading:false,isError:true}
              case types.GET_RESTAURANT_DATA_FAILURE:
                return {...state,isLoading:false,isError:true}
            default:
              return state;          


  }
};

export { reducer };