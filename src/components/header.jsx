const Header=(props)=>{
  return(
    <div>
        <h1 className="text-3xl font-medium">Hello {props.username}!!!</h1>
        <p>I help You manage your activities :)</p>
      </div>
  )
}
export default Header
