import {createContext,useState} from 'react'
import App from '../App'

export const TheameCreate=createContext()

export default function ThemeContextProvider({children}) {
  const[theme,setTheme]=useState(false);
  const funToggle=()=>{
    setTheme((per)=>!per)
    console.log("heii")
  }

  return (<TheameCreate.Provider value={{theme,funToggle}}> {children}</TheameCreate.Provider>
        
     
  )
}
