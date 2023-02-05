import { useSelector } from "react-redux";
import Login from "../pages/Login";


export default function PrivateRoute({children}) {
    const isAuth=useSelector((store)=>{
        console.log(store)
        return store.loginReducer.isAuth
    })

    return <>
        {isAuth ? children : <Login/>}
    </>
};
