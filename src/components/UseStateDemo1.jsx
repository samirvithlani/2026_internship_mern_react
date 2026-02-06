import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    //var count = 0;
    const[count,setCount]=useState(0)
    //count --> stateVariable..
    //setCount --> setter function --> it will use for update state variable..
    //useState(0) -->0 will act as inital value

    const increseCount = ()=>{
      //console.log('count before increse ',count)
      //count++;
      setCount(count+1)
      console.log('count after increse ',count)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}
