
const Todoitem=(props)=>{
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    const handle=(deleteid)=>{
         var temp=activityarr.filter(function(item){
            if(item.id===deleteid)
            {
                return false
            }
            else{
                return true
            }
         })
         setactivityarr(temp)

    }
    return(
        <div className="flex justify-between">
            
        <p>{props.index+1}. {props.activity}</p>
        <button className="text-red-600" onClick={()=>handle(props.id)}>Delete</button>
        </div>

    )

}
export default Todoitem
