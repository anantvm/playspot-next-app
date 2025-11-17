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
  const [posts,setPosts]=useState([]) // <-- Holds ALL posts from Firebase
  const [filteredPosts, setFilteredPosts] = useState([]) // <-- Holds posts to be displayed
  const [selectedGame, setSelectedGame] = useState(''); // <-- Holds the filter

  useEffect(()=>{
    getPost();
  },[])

  // This new useEffect filters the posts whenever the selectedGame or main posts list changes
  useEffect(() => {
    if (selectedGame === '') {
      setFilteredPosts(posts); // If no game selected, show all
    } else {
      // Filter posts based on the game
      // IMPORTANT: This assumes your post document in Firestore has a field named "game"
      const filtered = posts.filter(post => 
        post.game && post.game.toLowerCase() === selectedGame.toLowerCase()
      );
      setFilteredPosts(filtered);
    }
  }, [selectedGame, posts]); // Re-run this effect when selectedGame or posts changes

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    const allPosts = []; // <-- Use a temp array
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data()); // <-- Add to temp array
    });
    setPosts(allPosts); // <-- Set state once with all posts
    setFilteredPosts(allPosts); // <-- Initially, filtered list is all posts
  }

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-7">
      <Hero/>
      <Search/>
      {/* Pass the state and setter down to GameList */}
      <GameList 
        setSelectedGame={setSelectedGame} 
        selectedGame={selectedGame} 
      />
      {/* Pass the FILTERED posts down to Posts */}
      {filteredPosts ? <Posts posts={filteredPosts}/> : null}
    </div>
  );
}