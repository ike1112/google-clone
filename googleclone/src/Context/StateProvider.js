import React,{createContext,useContext,useReducer} from "react";


//create a context object that has a Provider and Consumer
export const StateContext=createContext();

//create a react component
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//create a custom hook
export const useStateValue=()=>useContext(StateContext);