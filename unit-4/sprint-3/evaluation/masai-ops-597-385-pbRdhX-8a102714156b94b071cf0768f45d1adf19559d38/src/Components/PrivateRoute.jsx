import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute() {
    const {isAuth,token,loginfun,logOutfun}=useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/login"/>
    }

    return children

}



export default PrivateRoute;
