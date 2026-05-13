import { useEffect, useState } from "react";

function New(){
    const [list,setList]=useState([]);
    const [count,setCount]=useState(1);
    


    function addItem(){
        const itemName='Item' +count;
setList((previousState)=>{return[...previousState,itemName]})
setCount((previousState)=>{return previousState+1})
    }
    return(
        <>
        <h1>List of Items</h1>

        <button onClick={addItem} >Count</button>
        <ul>{
            list.map((element)=><li>{element}</li>)
            }
            
        </ul>
        </>
    )
}
export default New;