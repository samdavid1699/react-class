import { BrowserRouter, Route, Routes , Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import User from "./User";
import Old from "./Old";
import New1 from "./New1";
import Login from "./Login";
import Dashboard from "./Dashboard";

function Landingpage(){
    return(<>
    {/* <h1>Home</h1>
    <h2>About</h2>
    <h3>Contact us</h3> */}
    {/* <Home/>
    <About/>
    <Contact/> */}
    <Login/>
    
    <BrowserRouter>

    <ul>
<li><Link to="/"> Home</Link></li>
<li><Link to="/user/1"> user 1</Link></li>
<li><Link to="/user/2"> user 2</Link></li>
<li><Link to="/user/3"> user 3</Link></li>
<li><Link to="Page-type/old">Old Page</Link></li>
<li><Link to="page-type/new"> New Page</Link></li>
    {/* <li><Link to="/login">Login</Link></li>
<li><Link to="/dashboard">Dashboard</Link></li> */}
    </ul>
    <Routes>
         {/* <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/login" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
<Route path="/user/:id"  element={<User/>}/>
   
   <Route path="Page-type">
    <Route path="old" element={<Old/>}/>
    <Route path="new" element={<New1/>}/>
   </Route>
  
    </Routes>
    
    </BrowserRouter>
    </>)
}
export default Landingpage;