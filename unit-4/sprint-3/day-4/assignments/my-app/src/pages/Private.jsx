import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthCreate } from "../Context/AuthContextProvider"

export default function Private({children}) {
    const {isAuth,LogOutfun,Loginfun}=useContext(AuthCreate)

    if(!isAuth){
        return <Navigate to='/login'/>
    }


    return children
};
