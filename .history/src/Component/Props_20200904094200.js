import React, { useRef, useEffect, useState } from 'react'
function Props() {
    const h1ref = useRef()
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(1)
    return (
        <div ref={h1ref}>
            <h1>{counter}</h1>
            <h1>{counter2}</h1>

        </div>)
}
export default Props
