import React, { useEffect } from 'react'
const myContext = React.createContext(null)
function AbcComponent() {
    return <h1>Working fine</h1>
}
function BcaComponent() {
    return <h1>Working BCA BcaComponent</h1>
}
function ContextApi() {
    return (<myContext.Provider value={{
        name: "PRaful"
    }}>
        <AbcComponent />
        <BcaComponent />
    </myContext.Provider >

    )
}

export default ContextApi
