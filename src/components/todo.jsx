
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { useState } from "react"
const Todo = () => {
    const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "Go For a walk"
        },
        {
            id: 2,
            activity: "breakfast is ready"
        },
        {
            id: 3,
            activity: "lunach is Ready"
        }

    ])
    return (
        <div className="flex  gap-5 flex-wrap">
            <AddTodo activityarr={activityarr} setactivityarr={setactivityarr}></AddTodo>
            <TodoList activityarr={activityarr} setactivityarr={setactivityarr}></TodoList>
            </div>
            )}
export default Todo