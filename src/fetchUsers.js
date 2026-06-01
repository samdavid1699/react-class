export const fetchUser =()=>{
    return async (dispatch) =>{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com//users"
        );
        const data = await response.json();
        dispatch({
            type:"GET_USERS",
            payload :data
        });
    }
} 