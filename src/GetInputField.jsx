import { useState } from "react";

function GetInputField(){
    const [val,setVal]=useState("Kashif Ali");
    return(
        <>
            <h1>Get Input Field</h1>
            <h2>{val}</h2>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Your Name" />
            <button onClick={()=>setVal("")}>Clear Value</button>
        </>
    )
}

export default GetInputField;