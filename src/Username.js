import { useEffect, useState } from "react";
import './App.css';
import { Button, EditableText, InputGroup } from "@blueprintjs/core";

// const AppToaster=Toaster.create({
//     postion:"top"
// });

function Username (){
    const [users,setUsers]=useState([]);
    const[newName,setNewName]=useState("");
    const[newEmail,setNewEmail]=useState("");
    const[newWebsite,setNewWebsite]=useState("")
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((json)=>setUsers(json))
    },[])

function addUser(){
    const name= newName.trim();
    const email=newEmail.trim();
    const website = newWebsite.trim()

    if(name&& email && website){
         fetch('https://jsonplaceholder.typicode.com/users',{
            method:"POST",
            body:JSON.stringify({
                name,
                email,
                website
            }),
            headers:{
                "Content-type":" application/json; charset=UTF-8"
                            }
         }).then((response)=>response.json())
         .then(data=>{
            setUsers([...users,data])
            // AppToaster.show({
            //     message:"User add Successfully",
            //     intent:'success',
            //     timeout:3000
            // })
            setNewName("");
            setNewEmail("");
            setNewWebsite("");
         })
    }

}
function onChangeHandler(id,key,value){
setUsers((user)=>{
    return user.map(user=>{
        return user.id === id?{...user,[key]:value}:user;
    })
})
}
function updateUser(id){
    const user =users.find((user)=>user.id === id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"PUT",
        body: JSON.stringify({user}),
        headers:{
            "Content-type":"application/json;  charset=UTF-8"
        }
    }
).then((response)=>response.json())

}

function deleteuser(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
method:"DELETE",
    }
).then((response)=>response.json())
    .then(data=>{
        setUsers((user)=>{
            return  users.filter(user=> user.id !==id)
        })
    })



}


    return(
    <div className="App">
<table className="bp4-html-table modifier">
    <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
    </thead>
    <tbody>

    </tbody>
    {users.map(user=>
    <tr key={user.id}>
         <td>{user.id}</td>
        <td>{user.name}</td>
        <td> <EditableText onChange={value=>onChangeHandler(user.id,'email',value)}  value={user.email} /> </td>
        <td> <EditableText onChange={value=>onChangeHandler(user.id, 'website',value)} value= {user.website} /> </td>
        <td>
            <Button onClick={()=>updateUser()} intent='primary'>Update</Button>
            <Button onClick={()=>deleteuser(user.id)} intent='danger'>Delete</Button>
        </td>
    </tr>
       
    )}
    <tfoot>
        <tr>
            <td></td>
            <td>
                <InputGroup value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="Enter the name"/>
            </td>
            <td>
                <InputGroup
                value={newEmail}
                onChange={(e)=>{setNewEmail(e.target.value)}}
                 placeholder="Enter the Website"/>
            </td>
            <td>
                <InputGroup 
                value={newWebsite}
                onChange={(e)=>{setNewWebsite(e.target.value)}}
                placeholder="Enter the website"/>
            </td>
            <td>
                <Button intent="success" onClick={addUser} >Add User</Button>
            </td>
        </tr>
    </tfoot>
</table>
    </div>
        
    )
}
export default Username;