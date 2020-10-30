import React, { useEffect } from 'react'
const myContext = React.createContext(null)
function ContextApi() {
    return (<myContext.Provider value={}>
        <AbcComponent />
        <BcaComponent />
    </myContext.Provider>

    )
}

export default ContextApi
