import  Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import Contact from "@/components/Contact";
import Albums from "@/components/albums/Albums";
import Blog from "@/components/blog/Blog";
import Newsletter from "@/components/events/Newsletter";

export default function Home() {
  return (
    <main>

        <Hero/>
        <Player/>
        <Events/>
        <Albums/>
        <Blog/>
        <Newsletter/>
        
    </main>
   
  )
}
