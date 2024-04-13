import useFetchData from "../hooks/FetchDataHook";

const Users = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const userData = useFetchData(URL);
    return(
        <>
            <h2>Fetch users from JSON Place holder.</h2>
            <ul>
                {userData?.map(user => 
                    <li key={user.id}> {user.name} ----- {user.email}</li>    
                )}
            </ul>
        </>
    )
}

export default Users;