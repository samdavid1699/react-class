import { useState } from "react";

function Form (){
    // const [name,setName]=useState("");
    // console.log("currentState", name)

    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[city,setCity]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted!!!",{name,email,city})
    }

    return(<>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" 
        onChange={(e)=>setName(e.target.value)} 
        value={name}/>
        <input type="text" placeholder="Enter Your Email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>
        <input type="text" placeholder="Enter Your City"
        onChange={(e)=>setCity(e.target.value)}
        value={city}/>
        <button type="submit" >Submit</button>
        
        {/* <label>Enter your Name <input type="text" onChange={(e)=>{setName(e.target.value)}} /> </label>
        <label>Enter you age<input type="text"/> </label>
        <label>Enter your Address<input type="text"/> </label>
        <label>Enter you State<input type="text"/> </label>
        <button type="submit" onClick={console.log}>submit</button> */}
    </form>
    </>)
}
export default Form;