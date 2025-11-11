"use client"
import Image from "next/image";
import Hero from "./_components/Home/Hero";
import Search from "./_components/Home/Search";
import GameList from "./_components/Home/GameList";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs} from "firebase/firestore";
import app from "@/shared/FirebaseConfig";
import { useEffect, useState } from "react";
import Posts from "./_components/Home/Posts";

export default function Home() {
  const db=getFirestore(app)
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      setPosts(posts=>[...posts,doc.data()])
    });
  }

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-7">
      <Hero/>
      <Search/>
      <GameList/>
      {posts?<Posts posts={posts}/>:null}
    </div>
  );
}
