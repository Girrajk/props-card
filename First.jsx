import React from "react";

const First = (props)=>{
    return(
        <>
            <h1>my Name is {props.name}</h1>
            <p>I Am From {props.city}</p>
        </>
    )
}
export default First