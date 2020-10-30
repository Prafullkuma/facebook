import React, { useState } from 'react'

//calling the onChange method fuction outside of the function
//function can defied before or after the return 
// function updateTextField(event,setName){

// }

// <input type="text" value={name} onChange={(e)=>updateTextField(e,setName)}/>

//condition rendering 
// name=== "admin" && password="password" && "Admin is there" output will be "admin is there"
// name ==="adminin" && password="paswword" && 3===7 return false
// name ==="adminin" && password="paswword" && 3===3 return true

function From() {
    const [name, setName] = useState('ss')
    const [password, setPassword] = useState('')
    return (
        <div>
            <input type="text" value={name} onChange={updateTextField} />
            <input type="password" value={password} onChange={updatePasswordField} />
            <button onClick={save}>submit</button>
        </div>
    )
    function updateTextField(e) {
        setName(e.target.value)
    }
    function updatePasswordField(e) {
        setPassword(e.target.value)
    }
    function save() {
        console.log(name, password)
    }
}

export default From
