import Header from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import ToDo from "./ToDo";


function Apple(){
  return(
    <>
      <Header />
      <h1>Hello React</h1>
      <h2>Code Step by Step 2 {sum()}</h2>
      <Link to="/test">Test</Link>
      <Fruit />
      <Jsx />
      <ToDo />

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