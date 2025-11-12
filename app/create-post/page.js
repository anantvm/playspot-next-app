"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function CreatePost() {
    const {data:session}=useSession();
    const router=useRouter();
    useEffect(()=>{
        if(!session){
            router.push('/');
        }
    },[])
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost