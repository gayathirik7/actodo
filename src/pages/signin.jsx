import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Singup = (props) => {
    const navigate=useNavigate()


    const data = props.data
    const setdata = props.setdata
    const [user, setuser] = useState()
    const [pass, setpass] = useState()
    const UserChange = (evt) => {

        setuser(evt.target.value)
    }
    const passChange = (evt) => {

        setpass(evt.target.value)
    }
    const addUser=()=>{
        setdata([...data,{username:user,password:pass}])
        navigate("/")

    }
    return (
        <div className="bg-black p-10 ">
            <div className="bg-white p-10 border rounded-md ">
                < h1 className="text-3xl font-medium">Hey Hii</h1>
                <p className="text-1xl font-medium">you can signup here :)</p>
                <div className="flex flex-col gap-2 my-3">
                    <input onChange={UserChange} type="text" placeholder="Username" className=" bg-transparent border  border-black rounded-md p-1 w-52"></input>
                    <input onChange={passChange} type="text" placeholder="Password" className=" bg-transparent border border-black rounded-md p-1 w-52"></input>
                    <input type="text" placeholder=" confirm Password" className=" bg-transparent border border-black rounded-md p-1 w-52"></input>
                    <button onClick={addUser}className="bg-yellow-700 p-2 border border-black rounded-md w-24 ">sign up</button>
                    <p className=" font-medium">Already have an account?<Link to={"/"} className="underline">login</Link></p>
                </div>

            </div>

        </div>)
}
export default Singup