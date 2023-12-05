import  Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import Contact from "@/components/Contact";
import Albums from "@/components/albums/Albums";

export default function Home() {
  return (
   <div>
      <Hero/>
      <Player/>
      <Events/>
      <Albums/>
    </div>
  )
}
