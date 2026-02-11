import React, { useState } from 'react'

export const InputDemo1 = () => {

    const[name,setName] = useState("")
    const [age, setage] = useState("")

    const nameHandler = (event)=>{
        //console.log(event)
        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        setage(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
    </div>
  )
}
