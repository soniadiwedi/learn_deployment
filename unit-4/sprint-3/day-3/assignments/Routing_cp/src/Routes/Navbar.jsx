import {NavLink} from "react-router-dom"
function Navbar() {
    const links=[{path:'/login',title:'Login'},
                 {path:'/',title:'Home'},
                {path:'/about',title:'About'},
                {path:'/Contact',title:'Contact'},
                {path:'/Product',title:'Product'}]
    const styles={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        textDecoration:'none',
        backgroundColor:'pink',
        padding:'20px'
    }

    return(
        <div className = "navbar" style={styles}>
            {
                links.map((el)=>{
                   return( <NavLink style={({isActive})=>{
                        return isActive ?{ textDecoration:'none', color:"red"}:
                                        { textDecoration:'none', color:"black"}
                   }} key={el.path} to={el.path}>{el.title}</NavLink>)
                })
            }
        </div>
    )
}

export { Navbar }