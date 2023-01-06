import { AuthContext } from "./Context/AuthContextPrivider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({children}) {
    const {isAuth,login,logout}=useContext(AuthContext)
   
   if(!isAuth){
        return <Navigate to="/"/>
   }

    return children
};
