import React, { useEffect, useContext } from 'react'
const myContext = React.createContext(null)
function AbcComponent() {
    const state = useContext(myContext)
    return <h1>Working fine{state.name}</h1>
}
function BcaComponent() {
    const state = useContext(myContext)
    console.log(state.name)
    return <h1>Working BCA BcaComponent</h1>
}
function ContextApi() {
    return (<myContext.Provider value={{
        name: "Praful",
        age: 27
    }}>
        <AbcComponent />
        <BcaComponent />
    </myContext.Provider >

    )
}

export default ContextApi
