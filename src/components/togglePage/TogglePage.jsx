import React, { useState,useEffect } from 'react'
import { useContext,createContext } from 'react'
import Context from '../../hooks/Context'
import './themes.css'

const ThemeContext = createContext();
export const useTheme =()=> useContext(ThemeContext);
export const TogglePage=({children})=> {   
    const [theme,setTheme] = useState("dark")
    
    useEffect (()=>
       { document.documentElement.setAttribute("data-theme",theme)
        },[theme]
    )
    const toggleTheme =()=>{
        console.log(theme)
        theme === "light"? setTheme("dark"):setTheme("light")
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

