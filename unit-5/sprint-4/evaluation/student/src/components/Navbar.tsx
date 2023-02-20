import {Link} from "react-router-dom"

export default function Navbar() {
    

    return(
        <div>
           <div><Link to="/">Home</Link></div> 
           <div><Link to="/result">Result</Link></div>
           <div><Link to="/vote">Vote</Link></div>
        </div>
    )
};
