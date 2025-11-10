import  { useState,useEffect,useContext } from 'react'
import ThemeContext from '../../hooks/ThemeContext'
import './themes.css'


export const useTheme =()=> useContext(ThemeContext);
export const TogglePage=({children})=> {   
    const [theme,setTheme] = useState("light")
    
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

