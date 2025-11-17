"use client"
import React, { useEffect, useState } from 'react'
import Data from '/shared/Data'

// 1. Accept setSelectedGame and selectedGame as props
function GameList({ setSelectedGame, selectedGame }) {
    const [games,setGames]=useState([]);
    useEffect(()=>{
        setGames(Data.GameList)
    },[])
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-4'>
        {games.map((item)=>(
            <div 
                key={item.id} 
                className={`flex flex-col items-center cursor-pointer p-2 rounded-lg
                           hover:bg-gray-100 transition-all duration-150
                           ${selectedGame === item.name ? 'bg-blue-100 border-2 border-blue-500' : ''}`} // <-- 2. Add dynamic classes for active state
                
                // 3. Add onClick handler
                // This logic sets the game, or un-sets it (to '') if you click the same one again
                onClick={() => setSelectedGame(selectedGame === item.name ? '' : item.name)}
            >
                <img src={item.image} alt={item.name}
                 width={45} height={45} className='hover:animate-bounce
                  transition-all duration-150'/>
                <h2 className='text-[14px] text-center'>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default GameList