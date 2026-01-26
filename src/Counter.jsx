import { useState } from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);
    const [rcount,setRCount] = useState(10);
    const addCount=(num)=>{
        setCount(num + 1);
    }
    return(                
        <>
            <h1>Count : {count}</h1>
            <h2>Reverse Count: {rcount}</h2>
            <button onClick={()=>addCount(count)}>Counter</button>
            {/* <button onClick={()=>setCount(count+1)}>Counter</button> */}
            <button onClick={()=>setRCount(rcount - 1)}>Reverse Counter</button>

        </>
    )
}

export default Counter;