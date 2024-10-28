import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Login=(props)=>{
    const navigate=useNavigate()

    const [user,setuser]=useState()
    const[pass,setpass]=useState()
    const[ruser,setruser]=useState(true)
    const data=props.data
    
    
    const UserChange=(evt)=>{

setuser(evt.target.value)
    }
    const passChange=(evt)=>{

        setpass(evt.target.value)
            }
            const Checkuser=()=>{
                var userfound=false
                data.forEach(function(item){
                    if(item.username===user && item.password===pass){
                        console.log("login sucessfull")
                        userfound=true
                        navigate("/landing",{state:{user:user}})
                    } 
                    
                        
                                                            
                })
                if(userfound===false){
                    console.log("Login failed")
                    setruser(false)
                }

            }
    return(
        <div className="bg-black p-10 ">
            <div className="bg-white p-10 border rounded-md ">
                < h1 className="text-3xl font-medium">Hey Hii</h1>
                {ruser?<p className=" font-medium">I help You manage your activities after you login :)</p>:<p className=" text-red-600 font-medium">Please sign up before you login!!!</p>}
                
                <div className="flex flex-col gap-2 my-3">
                    <input value={user}  onChange={UserChange}type="text" placeholder="Username" className=" bg-transparent border  border-black rounded-md p-1 w-52"></input>
                    <input   value={pass}onChange={passChange}type="text" placeholder="Password" className=" bg-transparent border border-black rounded-md p-1 w-52"></input>
                    
                    <button onClick={Checkuser} className="bg-purple-800 p-2 border border-black rounded-md w-24 ">Login</button>
                    <p className=" font-medium">Dont have an account?<Link to={"/signup"} className="underline">Sing Up</Link></p>
                </div>

            </div>

        </div>
    )
}
export default Login