import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function Private({children}) {
    const isAuth=useSelector((store)=>{
        console.log(store)
        return store.authReducer.isAuth
    })
    const location=useLocation()


    if(!isAuth){
        return <Navigate to="/login" state={location.pathname} replace/>
        
    }


    return children
};
