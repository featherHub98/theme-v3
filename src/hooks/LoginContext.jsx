import { createContext } from 'react'
const LoginContext = 
    createContext({
        isLogged : false,
        setIsLogged : ()=>{}
        
    })


export default LoginContext