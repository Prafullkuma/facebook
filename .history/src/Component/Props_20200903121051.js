import React from 'react'

function GreetingComponent(props) {
    return <div>
        <h1>Hellow {props.name}</h1>
    </div>
}


function Props() {
    return (
        <div>
            <GreetingComponent name="Prafull" />
        </div>
    )
}

export default Props
