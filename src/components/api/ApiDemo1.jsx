import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

        const [message, setmessage] = useState("")
        const [users, setusers] = useState([])

    const getUsers = async()=>{

        //get function Promise
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response) //axios object //AxiosResponse
        console.log(response.data) //api response.
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data) //array
        setusers(response.data.data)
        
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getUsers()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        }
    </div>
  )
}
