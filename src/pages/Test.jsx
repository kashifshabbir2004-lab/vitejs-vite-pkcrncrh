function Test(){
    return(
        <>
            <h1>Test</h1>
            <img src="https://img.freepik.com/free-vector/house-home-building-cartoon-vector-icon-illustration-building-landmark-icon-isolated-flat_138676-15023.jpg?semt=ais_hybrid&w=740&q=80" className="photo" />
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </>
    )
}

function callFun() {
    alert("Button clicked!");
}

export default Test;