import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";


const getEvents = async ()=>{
    const res = await fetch('http://localhost:4000/events');
    return res.json();
}


const Events = async() => {
    const event = await getEvents();
    
  return <section className="section" id="tour">
    <div className="container mx-auto text-white">
        {/* event box */}
        <SectionHeader pretitle={'World Tour'} title={'Upcoming Events'}/>
        <EventBox event={event}/>
    </div>
  </section>
}

export default Events
