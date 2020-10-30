import React from 'react'

function GreetingComponent(props) {
    return <div>
        <h1>Hellow {props.name}</h1>
        {props.children}
    </div>
}


function Props() {
    return (
        <div>
            <GreetingComponent name="Prafull" >
                <h1>This is Children</h1>
            </GreetingComponent>
        </div>
    )
}

export default Props
