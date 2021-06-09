import React from "react";

const style = {
  backgroundColor:"black",
  margin:"auto",
  padding:"10px",
  color:"white",
  textAlign: "center"
}

export function FormatedDate(props) {
return <h3 style={style}>  {props.date.toLocaleDateString()}</h3>;
}
