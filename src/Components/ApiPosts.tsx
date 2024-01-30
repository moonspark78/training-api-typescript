import React, { useEffect, useState } from 'react';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const ApiPosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
  return (
    <div>ApiPosts</div>
  )
}
