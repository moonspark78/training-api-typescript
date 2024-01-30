import React, { useEffect, useState } from 'react';
import "./ApiPosts.css"

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const ApiPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        };
        fetchData();
    },[]);



  return (
    <div className='to'>
        <h2>ApiPosts</h2>
        <div className='card'>

        {
            posts.map((post) => (
                <div>
                    <p key={post.id}>{post.title}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
