import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [loading,setLoading]=useState(true) //boolean
    const stopLoader = ()=>{
        setLoading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={stopLoader}>STOP</button>
    </div>
  )
}
