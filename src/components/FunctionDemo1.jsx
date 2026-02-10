import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {

    const test =()=>{
        alert("test function called.....")
    }
    const test2 =(x)=>{
        alert("value of x "+x)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo1</h1>
        <button onClick={test}>CLICK</button>
        {/* <button onClick={test2(2)}>CLICK2</button> */}
        <button onClick={()=>{test2(100)}}>CLICK 2</button>
        <CardComponent title="FUN DEMO 1" description="FUN DEMO 1 component"></CardComponent>
        
    </div>
  )
}
