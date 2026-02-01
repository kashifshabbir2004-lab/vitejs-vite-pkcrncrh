import { useState } from "react";

function callFun() {
    alert("Button clicked Outside!");
}


function ToDo(){
    const name="Kashif Ali";
    let x=10;
    let y=20;
    const userObj = {
        name:"kashif",
        email:"kashif@gmail.com"
    }

    const userArray = [
        "name","email","age"
    ]

    function operation(a,b,op){
        if(op=="+"){
            return a+b;
        } else if(op=="-") {
            return a-b;
        } else {
            return a*b;
        }
    }

    const path = "https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80";

    // function callFun() {
    //     alert("Button clicked!");
    // }

    const [result, setResult] = useState("");

    const fruit=(name)=>{
        setResult(name); 
    }

    return(
        <>
            <h1>{name?name:"User Not Found"}</h1>
            <h1>{x*y}</h1>
            <h1>{operation(10,20,"")}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userArray[2]}</h1>
            <img src={path} width="150"/>
            <button onClick={callFun}>Click Me</button>
            <button onClick={()=>fruit("Apple")}>Apple</button>
            <button onClick={()=>fruit("Banana")}>Banana</button>
            <div>{result}</div>
        </>
    )

}

export default ToDo;