import axios from "axios"
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

export const getProductSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const postProductSuccessAction=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS}
}

export const productRequest=()=>{
    return {type:PRODUCT_REQUEST}
}
export const productFailure=()=>{
    return {type:PRODUCT_FAILURE}
}

//////////////////////////////////////////////

export const postProduct=(payload)=>(dispatch)=>{
    dispatch(productRequest())
    axios.post(` http://localhost:8080/products`,payload).then((res)=>{
        dispatch(postProductSuccessAction())
    }).catch(()=>{
        dispatch(productFailure())
    })
}


export const getProduct=(obj)=>(dispatch)=>{
    dispatch(productRequest())
    axios.get(` http://localhost:8080/products`,obj).then((res)=>{
        dispatch(getProductSuccessAction(res.data))
    }).catch(()=>{
        dispatch(productFailure())
    })
}
////////////////////////////////////////////////////////////////

export const patchProduct=(id,obj)=>(dispatch)=>{
    dispatch(productRequest())
    axios.patch(`http://localhost:8080/products/${id}`,obj).then((res)=>{
        dispatch( {type:PATCH_PRODUCT_SUCCESS})
    }).catch((e)=>{
        dispatch(productFailure())
    })
}

/////////////////////////////////////////////////////////////////////

// export const deleteProduct=(id)=>(dispatch)=>{
//     axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
//         dispatch()
//     })
// }