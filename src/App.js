import Header from "./components/header";
import Card from "./components/card";
import Todo from "./components/todo";
import Login from "./pages/login";
import Singup from "./pages/signin";
import Landing from "./pages/landing.jsx";
import { useState } from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";




const App=()=>{
  const[data,setdata]=useState([{
      username:"strily",
      password:"strilyk7"

  }])

  return(
      <div>
  <BrowserRouter>
  

  <Routes>
  <Route path='/' element={<Login data={data}setdata={setdata}/>}></Route>
  <Route path='/signup' element={<Singup data={data}setdata={setdata}/>}></Route>
  <Route path='/landing' element={<Landing/>}></Route>


  </Routes>
  
  </BrowserRouter>


  </div>              
  
      
  )
}
export default App