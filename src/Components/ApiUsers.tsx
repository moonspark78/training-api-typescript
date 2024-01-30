import React, { useEffect, useState } from 'react'


type User = {
    id:string;
    name:string;
    email:string;
    address:{
        street:string;
        city:string;
    }
}

export const ApiUsers = () => {
    const [users, setUsers] = useState<User>()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data);
             
        };
        fetchUsers();
    },[]);



  return (
    <div className='users'>
        <h2>ApiUsers</h2>
        <div className='userCard'>

        </div>
    </div>
  )
}
