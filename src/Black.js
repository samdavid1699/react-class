
import React from "react";
class Black extends React.Component{
    render(){
        const text="Welcome";
        const {color}= this.props;
         return(
        <h1> hi all my color is {color}</h1>
    )
    }
   

}
export default Black;