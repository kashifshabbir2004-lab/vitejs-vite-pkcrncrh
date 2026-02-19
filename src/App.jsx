import Header from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import ToDo from "./ToDo";
import Counter from "./Counter";
import Toggle from "./Toggle";
import MultiCondition from "./MultiCondition";
import PropsTut from "./PropsTut";
import UserColleges from "./UserColleges";
import Student from "./Student";
import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";
import GetInputField from "./GetInputField";


function Apple(){
  let name="Kashif Ali SH";
  let age=43;

  let userObject={
    name:"Kashif Ali",
    age:43,
  }

  let userObject2={
    name:"Uzair Kashif",
    age:12,
  }

  let userColleges=['UMT','UCL'];
  const [student,setStudent]=useState();
  return(
    <>
      <Header />
      <h1>Hello React</h1>
      <h2>Code Step by Step 2 {sum()}</h2>
      <Link to="/test">Test</Link>
      <Fruit />
      <Jsx />
      <ToDo />
      <Counter />
      <Toggle />
      <MultiCondition />
      <PropsTut user={userObject} />
      <PropsTut user={userObject2} />
      <UserColleges names={userColleges} />
      { student && <Student name={student} /> }
      <button onClick={()=>setStudent("Uzair Kashif")}>Student Name</button>
      <User name="Ali"/>
      <User />
      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color="blue">
        <h1>Hello Admin</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Kashif</h1>
        <h2 style={{color:"red"}}>Please Login</h2>
      </Wrapper>

      <GetInputField />

      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  ) 
}

function Fruit(){
  return(
    <h1>Apple color is <Color /> and</h1>
  )
}

function Color(){
  return(
    <span>Green</span>
  )
}

function sum(){
  return 10+10
}

function Jsx(){
  const name = "kashif ali";
  const users = ["Ali", "Ahmed", "Sara"];
  const UserList = ({users}) => {
    return (
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    )
  };
  
  return (
    <>
      <h1>My name is { name }</h1>
      <UserList users={users} />
    </>
  );
}
export default Apple;