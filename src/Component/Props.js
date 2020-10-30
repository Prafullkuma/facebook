import React, { useRef, useEffect, useState } from 'react'
function Props() {
    const h1ref = useRef()
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(1)
    useEffect(() => {
        console.log(h1ref)
    }, [counter])
    const reset = () => {
        setCounter2(1)
        setCounter(1)
    }
    return (
        <div ref={h1ref}>
            <h1>{counter}</h1>
            <h1>{counter2}</h1>
            <button onClick={() => setCounter(counter => counter + 1)}>counter1</button>
            <button onClick={() => setCounter2(counter => counter + 1)}>counter2</button>
            <button onClick={reset}>Reset</button>
        </div>)
}
export default Props
