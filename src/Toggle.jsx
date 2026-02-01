import { useState } from "react";
function Toggle(){
    const [display, setDisplay] = useState(true);
    return(
        <>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display?<h1>Kashif Ali</h1>:null
            }
        </>
    )   
}

export default Toggle;