
import { useState } from "react"
import Todoitem from "./todoitem"

const TodoList = (props) => {
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    
    
    
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length===0?<p>You havn't added anything yet</p>:""}
            

                <div>
                    {
                        activityarr.map((item, index) => (
                            <Todoitem activity={item.activity} id={item.id}index={index} activityarr ={activityarr} setactivityarr={setactivityarr}></Todoitem>
                            
                        )
                        )}



                </div>
                
            

        </div>

    )
}
export default TodoList