import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [country, setcountry] = useState("")
    const nameHandler =(event)=>{
        setname(event.target.value)
    }
    const genderHandler = (event)=>{
        setgender(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' value="male" name='gender' onChange={(event)=>{genderHandler(event)}}></input>
            <br></br>
            FEMALE : <input type='radio' value="female" name='gender' onChange={(event)=>{genderHandler(event)}}></input>
            
            <h1>{gender}</h1>
        </div>
        <div>
            <label>COUNTRY</label>
            <select onChange={(event)=>{setcountry(event.target.value)}}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
            {country}
        </div>
    </div>
  )
}
