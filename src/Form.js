import { useState } from "react";

function Form (){
    const [name,setName]=useState("");
    console.log("currentState", name)
    return(<>
    <form>
        <label>Enter your Name <input type="text" onChange={(e)=>{setName(e.target.value)}} /> </label>
        <label>Enter you age<input type="text"/> </label>
        <label>Enter your Address<input type="text"/> </label>
        <label>Enter you State<input type="text"/> </label>
        <button type="submit">submit</button>
    </form>
    </>)
}
export default Form;