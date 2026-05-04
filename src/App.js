
import './App.css';
import Apple from './Apple';
import Black from './Black';
import Welcome from './Welcome';


function App() {
  const color = "Green";
  const colorList=[
    {color:"red",msg:"One"},
      {color:"green",msg:"Two"},
          {color:"blue",msg:"Three"},
              {color:"white",msg:"Four"},
  ];
  const fruits =["Apple", "Banana", "Orange"];
  
  
  return (<>
  {/* {colorList.map(())} */}

<ul>
{fruits.map((fruit, index)=>(
  <li key={index}>{fruit}</li>
))}


</ul>

<ul>
  {colorList.map((color,msg,index)=>(
    <li>hi my color is{color.color} and my number is {color.msg}</li>
  ))}
</ul>

<Apple color={color}/>



  </>


  );
}

export default App;
