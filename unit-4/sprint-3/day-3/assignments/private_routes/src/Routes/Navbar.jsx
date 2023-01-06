import { NavLink } from "react-router-dom"


export default function Navbar() {
    const links=[{path:"/", title:"Home"},
                {path:"/login", title:"Login"},
                {path:"/dashboard", title:"Dashboard"},
                {path:"/settings", title:"Settings"},]

    const styles={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        textDecoration:'none',
        backgroundColor:'pink',
        padding:'20px'
    }

    return (
        <div style={styles} >
        {
            links.map((el)=>{
                return <NavLink style={(active)=>{
                    return active? { textDecoration:'none', color:"black"}:
                                    {color:'red',textDecoration:'none'}
                }} key={el.path} to={el.path}>{el.title}</NavLink>
            })
        }
        </div>
    )
};
