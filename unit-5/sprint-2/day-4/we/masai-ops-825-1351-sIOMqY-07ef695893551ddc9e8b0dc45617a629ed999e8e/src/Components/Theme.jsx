import { useDispatch, useSelector } from "react-redux"
import { handleTheme } from "../Redux/action"

export default function Theme() {
    const dispatch=useDispatch()
    const data=useSelector((store)=>{
        // console.log(store.themeReducer.theme)
        return store.themeReducer.theme
    })

    const handleLightColor=()=>{
        dispatch(handleTheme("light"))
    }

    const handleDarkColor=()=>{
        dispatch(handleTheme("dark"))
    }

    return (
        <>
        <button onClick={handleLightColor} disabled={data==="light"}>Switch to Light</button>
        <button onClick={handleDarkColor} disabled={data==="dark"}>Switch to Dark</button>
        </>
    )
};
