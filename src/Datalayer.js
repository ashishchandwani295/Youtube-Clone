import React, { createContext, useContext, useReducer } from 'react'

const DatalayerContext = new createContext();

function Datalayer( {initialState, reducer, children }) {
    return (
        <DatalayerContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </DatalayerContext.Provider>
    )
}

export const useDatalayerValue = () => useContext(DatalayerContext);

export default Datalayer
