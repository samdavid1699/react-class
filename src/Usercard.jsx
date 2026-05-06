import './Usercard.css';

const userData = [{
    name: "James",
    city: "New York",
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    online: false,
    profile: "images/OIP (1).jpeg",
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
},
{
    name: "Steve",
    city: "London",
    skills: ["Java", "Full Stack Developer", "Spring", "mySql", "AWS", "Jdbc"],
    online: true,
    profile: "images/OIP (2).jpeg",
    description: "Full Stack Developer with a focus on Java and Spring framework, experienced in cloud technologies."
},
{
    name: "Loki",
    city: "Queens",
    skills: ["Python", "Back End Development", "Djongo", "MongoDb", "Angular", "Node"],
    online: true,
    profile: "images/OIP.jpeg",
    description: "Back End Developer specializing in Python and Django, with a passion for scalable backend systems."
},{
    name: "James",
    city: "New York",
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    online: false,
    profile: "images/OIP (1).jpeg",
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
},
{
    name: "Steve",
    city: "London",
    skills: ["Java", "Full Stack Developer", "Spring", "mySql", "AWS", "Jdbc"],
    online: true,
    profile: "images/OIP (2).jpeg",
    description: "Full Stack Developer with a focus on Java and Spring framework, experienced in cloud technologies."
},
{
    name: "Loki",
    city: "Queens",
    skills: ["Python", "Back End Development", "Djongo", "MongoDb", "Angular", "Node"],
    online: true,
    profile: "images/OIP.jpeg",
    description: "Back End Developer specializing in Python and Django, with a passion for scalable backend systems."
}];
function User(props){
    return(
<div className="card-container">
    <span className={props.online? "online": "offline"}>
{props.online?"ONLINE":"OFFLINE"}
    </span>
    <img src={props.profile} className="img" alt="user"/>
    <h3>{props.name}</h3>
<h3>{props.city}</h3>
<p>{props.description}</p>
<div className="button">
    <button className="primary">Message</button>
    <button className="primary outline">following</button>
</div>
<div className="skills">
    <h6>Skills</h6>
    <ul>
        {props.skills.map((skills,index)=>(
<li key={index}>{skills}</li>
        )
        )}
    </ul>
</div>

</div>
    );
}
export const Usercard =()=>{
    return(
<>
{userData.map((user,index)=>(

//     //{
//     name: "Loki",
//     city: "Queens",
//     skills: ["Python", "Back End Development", "Djongo", "MongoDb", "Angular", "Node"],
//     online: true,
//     profile: "images/OIP.jpeg",
//     description: "Back End Developer specializing in Python and Django, with a passion for scalable backend systems."
// }//
    <User
    key={index}
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}
    />
))}
</>
    );
}