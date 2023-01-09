import { useContext } from "react"
import { AuthCreate } from "../Context/AuthContextProvider"

export default function Home() {
    const{token}=useContext(AuthCreate)
    return <div>
        <h1>Welcome Back Home page</h1>
        <p>TOKEN :   {token}</p>
    </div> 
};
