
import {createContext, useState} from 'react'

export const Contexto = createContext()


export const Datos = ({children}) => {
    const [first, setfirst] = useState(5)
  return <Contexto.Provider value={{first,setfirst}}>
              {children}
         </Contexto.Provider>
}

