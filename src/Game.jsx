import { useState } from "react"

export default function Game(){
    const[userChoice, setuserChoice]=useState("");
    const[computerChoice,setcomputerChoice]=useState("");
    const[result, setResult]=useState("");

    const choices=["Rock","Paper","Scissors"];
    const playGame=(choice)=>{
        const randomChoice= choices[Math.floor(Math.random()*3)]
    }
    setuserChoice(choices);
    setcomputerChoice(randomChoice);

    if(choice === randomChoice){
        setResult("Its a draw");
    }
     else if(
            (choice === "Rock"&& randomChoice ==="Scissors")||
            (choice ==="Paper"&& randomChoice==="Rock")||
            (choice ==="Scissors"&&randomChoice==="Paper")
        ){
            setResult("You Win!!!!");
         }
         else {
            setResult("You Lose!!")
         }
        

    return(
        <>
        <div style={style.container} >
            <h1>Rock, Paper, Scissors</h1>
            <div> 
                {choices.map((item)=>(
                    <button
                    key={item}
                    onClick={()=>playGame(item)}
                    style={style.button}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <h3>You:{userChoice}</h3>
            <h3>Computer Choice:{computerChoice}</h3>
            <h2>{result}</h2>
        </div>
        </>
    )
    const style={
        container:{
            textAlign:"Center",
            marginTop:"50px",
            fontFamily:"Arial"
        },
        button:{
            padding:"10px 20px",
            margin:"5px",
            fontSize:"16px",
            cusrsor:"pointer"
        },
    }
};