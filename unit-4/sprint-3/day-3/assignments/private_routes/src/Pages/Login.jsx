import {useContext} from "react"
import { AuthContext } from "../Routes/Context/AuthContextPrivider"


export default function Login() {
    const {isAuth,login,logout}=useContext(AuthContext)
function handleLogin(){
    login()
}
function handleLogout(){
   
}
    return (<>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
    </>)
};
