import React, { useEffect } from 'react'
import PostItem from './PostItem'

function Posts({posts}) {
    useEffect(()=>{
        console.log("Posts", posts)
    })
  return (
    <div>
        {posts.map((item, index)=>(
            <PostItem key={index} post={item}/>
        ))}
    </div>
  )
}

export default Posts