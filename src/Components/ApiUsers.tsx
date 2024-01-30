import React, { useEffect, useState } from 'react'
import "./ApiUsers.css"


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
    const [users, setUsers] = useState<User[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data);
            setUsers(data);
             
        };
        fetchUsers();
    },[]);

    const filterUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )



  return (
    <div className='users'>
        <h2>ApiUsers</h2>
        <div className='search'>
            <input
                className='input'
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
        </div>
        <div className='userCard'>
            {
                users.map((user) =>(
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
