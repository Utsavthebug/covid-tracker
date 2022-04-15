import React,{createContext, useReducer} from 'react'
import { casesReducers } from '../reducers/Casesreducers'

export const myContext = createContext()

export const DataContext = ({children}) => {
    const InitialState = {isFetching:true}
    
    const [state,dispatch] = useReducer(casesReducers,InitialState)
    
    return (
      <myContext.Provider value={{state,dispatch}}>
          {children}
      </myContext.Provider>
  )
}

