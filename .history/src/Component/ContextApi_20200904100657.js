import React, { useEffect, useContext } from 'react'
const myContext = React.createContext(null)
function AbcComponent() {
    return <h1>Working fine</h1>
}
function BcaComponent() {
    const state = useContext(myContext)
    return <h1>Working BCA BcaComponent</h1>
}
function ContextApi() {
    return (<myContext.Provider value={{
        name: "Praful"
    }}>
        <AbcComponent />
        <BcaComponent />
    </myContext.Provider >

    )
}

export default ContextApi
