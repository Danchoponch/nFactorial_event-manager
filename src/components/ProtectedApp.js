import './ProtectedApp.css';
import {getDatabase, onValue, ref, set } from "firebase/database";
import {app} from "./../config/firebase";
import { EventCard } from "./EventCards";
import React, { useState, useEffect } from 'react';
import {NavBar} from "./Navbar";
import {Overlay} from "./Overlay";
import {auth} from "./../config/firebase"


function ProtectedApp() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const database = getDatabase(app);
    const eventsRef = ref(database, 'events/');

    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEvents(Object.values(data));
      }
    });
  }, []);

  const handleOpenOverlay = (eventData) => {
    setSelectedEvent(eventData);
  };

  const handleCloseOverlay = () => {
    setSelectedEvent(null);
  };

  const handleRegisterEvent = async (eventData) => {
    if (!auth.currentUser) {
      alert("You need to authenticate");
      return;
    }
    let eventId;
    if(eventData.name == "Annual City Concert"){
        eventId = '1';
    }
    else if(eventData.name == "ATech Innovators Conference"){
        eventId = '2';
    }
    else{
        eventId ='3';
    }
    const userId = auth.currentUser.uid;
    const db = getDatabase(app);
    const eventRef = ref(db, `events/${eventId}`);
  
    onValue(eventRef, async (snapshot) => {
      const event = snapshot.val();
      if (event && event.availableSpots > 0) { // Check if event is not null and availableSpots is greater than 0
        await set(ref(db, `events/${eventId}/people/${userId}`), true);
        await set(ref(db, `userEvents/${userId}/${eventId}`), true);
        const updatedSpots = event.availableSpots - 1;
        await set(ref(db, `events/${eventId}/availableSpots`), updatedSpots);
        alert("Registered for the event successfully!");
      } else {
        alert("Sorry, no spots available or event does not exist!");
      }
    }, { onlyOnce: true });
  };
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
      </header>
      <main>
        <h1>Event manager</h1>
        <div className="events-container">
            
            {events.map(eventData => (
            <div key={eventData.eventId} className="event-item">
              <EventCard event={eventData}/>
              <button className='button events-button' onClick={() => handleOpenOverlay(eventData)}>View details</button>
              <button className='button register-button' onClick={() => handleRegisterEvent(eventData)}>Register</button>
            </div>
          ))}
        </div>
        <Overlay
          isOpen={selectedEvent}
          onClose={handleCloseOverlay}
          event={selectedEvent}
        />
      </main>
    </div>
  );
}

export default ProtectedApp;
