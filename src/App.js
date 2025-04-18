import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";

function App()
{
  
  const [users,setusers] = useState(
    [
        {
            username:"keerthana",
            password:"123"
        },
        {
           username:"Mike",
           password:"123"
        }
    ]
)

  return (  
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path='/Landing' element={<Landing/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}


export default App;
