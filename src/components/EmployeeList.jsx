import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
  console.log("emplist ",props)
  //props --> property
  //props -->keyeord  no
  //props --> datatype -->object
  //props -- {title:"...."}
  //updated -->{title:"",compnay:{}}
  //updated -->{title:"",compnay:{},employees:[{}]}
  return (
    <div style={{textAlign:"center"}}>
        <h1>EmployeeList</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            {
              props.employees.map((emp)=>{
                return <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>

        <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  )
}
