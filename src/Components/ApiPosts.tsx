import React, { useEffect, useState } from 'react';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const ApiPosts = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    },[]);



  return (
    <div>ApiPosts</div>
  )
}
