import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./fetchUsers";

function Users(){
    const dispatch = useDispatch();
    const users = useSelector(
        state =>state.users
    );
    useEffect(()=>{
        dispatch(fetchUser());
    },[]);
    return(
        <div>
            {users.map(user =>(
                <p key={user.id}>
                    {user.name}
                    {user.email}
                   
                </p>
            ))}
        </div>
    )
}
export default Users;