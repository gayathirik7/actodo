
import Header from "../components/header";
import Card from "../components/card";
import Todo from "../components/todo";
import { useLocation } from "react-router-dom";
const Landing=()=>{
    const datas=useLocation()
    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header username={datas.state.user} />

          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"React"} />
            <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:12:24"} />
            <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
          </div>
          <div>
          <Todo></Todo>
        </div>
        </div>
        


      </div>
    
    )
}
export default Landing