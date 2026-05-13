import { useEffect, useState } from "react";

function Count(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('screen Rendered')

    }, [count])
function updateCount(){
    setCount((previousState)=>{return previousState+1})
}
    return(<>
    <h1>I Have rendered this page {count} Times!!</h1>
    <button onClick={updateCount}>Rendered</button>
    </>)
}
export default Count;