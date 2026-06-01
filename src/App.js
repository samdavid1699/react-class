
// import { useState } from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  
  // let color= " Red";
 
//   const [color, setColor]=useState("White")
// const [model,setmodel]=useState("Nexon");
//   const [brand,setbrand]=useState("TATA");
//   const [year,setyear]=useState("2023");
//   const [fuel,setfuel]=useState("Petrol");

// const [car,setcar]=useState({
//   color:"white",
//   model:"Nexon",
//   brand:"TATA",
//   year:"2023",
//   fuel:"Petrol"
// });

// function updateCar(){
//   setcar(previousState=>{
//     return{...previousState,fuel:"Diesel"}})


// }
//   return (<>
  
// <h1> My Nexon </h1>
// <p>color: {car.color}</p>
// <p>model: {car.model}</p>
// <p>Brand: {car.brand}</p>
// <p>Year: {car.year}</p>
// <p>Fuel: {car.fuel}</p>
// <button onClick={updateCar} >click me</button>

//   </>


//   );
// }

//Read the data from store
const count =useSelector((state)=>state.count);

//Sent the data
const dispatch = useDispatch();
return(
  <div style={{textAlign:"center",marginTop:"50px"}}>
<h1>Simple Redux App</h1>
<h2>{count}</h2>
<button onClick={()=> dispatch({type:"ADD"}) } >Add</button>

  </div>
)

}

export default App;
