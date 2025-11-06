import React from 'react'
import { createContext } from 'react'
const Context =()=> 
    createContext({
        theme : "dark",
        toggleTheme : ()=>{}
    })


export default Context