import React from "react";

export default function ContentComponent() {
  //js code... number,string,undefined,boolean,object

  var year = 2026;
  var title = "React Js";
  var isAvailable = true;
  //jsx..

  var student = {
    name: "amit",
    age: 23,
    city: "ahmedabad",
  };

  return (
    <div style={{backgroundColor:"white",border:"1px solid black",minHeight:"500px",width:"100%",height:"auto",padding:"10px"}}>
      <h1>HELLO</h1>
      {year}
      <h1>YEAR : {year}</h1>
      <h2>Title : {title}</h2>
      <h1>ALL TAG MUST HAVE CLOSING TAG</h1> <br></br>
      <h3>Available???? {isAvailable == true ? "TRUE" : "FALSE"}</h3>
      <h4>AT A TIME WE CAN RETURN ONLY 1 TAG....</h4>
      <h4>
        whatever written inside return statment will be display on browser
      </h4>
      {/* <h2>{student}</h2> */}
      <h2>Name :{student.name}</h2>
      <h3>AGE : {student.age}</h3>
      <h3>city : {student.city}</h3>
    </div>
  );
}
