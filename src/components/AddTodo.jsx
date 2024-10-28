import { useState } from "react"

const AddTodo=(props)=>{
    
        const activityarr=props.activityarr
        const setactivityarr=props.setactivityarr
        const [newactivity,setnewactivity]=useState()
        const one=(evt)=>{
            setnewactivity(evt.target.value)

        }
        const two=()=>{
            setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
            setnewactivity([])
        }

    return(
        
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                <input value={newactivity}onChange={one}type="text" placeholder="Next Activity" className="border border-black bg-transparent p-1"></input>
                <button onClick={two}className="bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
    )
}
export default AddTodo