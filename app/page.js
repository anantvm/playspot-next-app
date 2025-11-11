import Image from "next/image";
import Hero from "./_components/Home/Hero";
import Search from "./_components/Home/Search";
import GameList from "./_components/Home/GameList";

export default function Home() {
  return (
    <div className="px-5 sm:px-7 md:px-10 mt-7">
      <Hero/>
      <Search/>
      <GameList/>
    </div>
  );
}
