import React from "react";

class Fav extends React.Component{
    constructor(){
        super();
        this.state={color:"Yellow", model:"ford"};
    }
    render(){
        return(
<div>
<h2>My car color is {this.state.color} and the Model is {this. state.model}</h2>
<button onClick={()=>{this.setState(previousState =>{return{...previousState,color:"Black"}
})}} > change color</button>


</div>
        );
    }
}
export default Fav;