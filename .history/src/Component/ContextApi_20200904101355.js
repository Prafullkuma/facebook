import React, { useEffect, useContext, useState } from 'react'
const myContext = React.createContext(null)
function AbcComponent() {
    const state = useContext(myContext)
    console.log(state.name)
    return <h1>Working fine{state.name}</h1>
}
function BcaComponent() {
    const { state, setState } = useContext(myContext)
    useEffect(() => {
        setTimeout(() => {
            setState(state => {

            })
        }, 1000)
    }, [])

    return <h1>Working BCA BcaComponent</h1>
}
function ContextApi() {
    const [obj, setObj] = useState({
        name: "prafull",
        age: 23,
        price: 23232
    })
    return (<myContext.Provider value={{
        name: "Praful",
        age: 27,
        state: obj,
        setState: setObj
    }}>
        <AbcComponent />
        <BcaComponent />
    </myContext.Provider >

    )
}

export default ContextApi
