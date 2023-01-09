import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
    const {authstate}=useContext(AuthContext)

    if(!authstate.isAuth){
        return <Navigate to={"/login"}/>
    }

    return children

}



export default PrivateRoute;
