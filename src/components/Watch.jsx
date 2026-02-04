import React from "react";
import { useParams } from "react-router-dom";

export const Watch = () => {
  //url -->:name --> fetch.. reuse

  const movieName = useParams().name // .name -->/watch/:name
  //const movieName = useParams().id // .name -->/watch/:id

  return (
    <div style={{textAlign:"center"}}>
      <h1>WATCHING....{movieName}</h1>
    </div>
  );
};
