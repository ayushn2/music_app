import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";
import { data } from "../../../data";

const Events = async() => {

  const event = data.events;
    
  return <section className="section" id="tours">
    <div className="container mx-auto text-white">
        {/* event box */}
        <SectionHeader pretitle={'World Tour'} title={'Upcoming Events'}/>
        <EventBox event={event}/>
    </div>
  </section>
}

export default Events
