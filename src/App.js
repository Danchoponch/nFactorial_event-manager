import './App.css';
import {getDatabase, onValue, ref } from "firebase/database";
import {app} from "./config/firebase";
import { EventCard } from "./components/EventCards";
import React, { useState, useEffect } from 'react';
import {NavBar} from "./components/Navbar";
import {Overlay} from "./components/Overlay";
import { Route, Routes } from 'react-router-dom';
import PublicApp from "./components/PublicApp";
import ProtectedApp from "./components/ProtectedApp";
import Authenticate from "./components/Authenticate";


function App() {
  // const [events, setEvents] = useState([]);
  // const [selectedEvent, setSelectedEvent] = useState(null);

  // useEffect(() => {
  //   const database = getDatabase(app);
  //   const eventsRef = ref(database, 'events/');

  //   onValue(eventsRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       setEvents(Object.values(data));
  //     }
  //   });
  // }, []);

  // const handleOpenOverlay = (eventData) => {
  //   setSelectedEvent(eventData);
  // };

  // const handleCloseOverlay = () => {
  //   setSelectedEvent(null);
  // };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <NavBar />
    //   </header>
    //   <main>
    //     <h1>Event manager</h1>
    //     <div className="events-container">
            
    //         {events.map(eventData => (
    //         <div key={eventData.eventId} className="event-item">
    //           <EventCard event={eventData}/>
    //           <button className='button events-button' onClick={() => handleOpenOverlay(eventData)}>View details</button>
    //           <button className='button register-button' onClick={() => alert("You need to authenticate")}>Register</button>
    //         </div>
    //       ))}
    //     </div>
    //     <Overlay
    //       isOpen={selectedEvent}
    //       onClose={handleCloseOverlay}
    //       event={selectedEvent}
    //     />
    //   </main>
    // </div>

    <Routes>
      <Route path='/' element={<PublicApp/>}/>
      <Route path='/Login' element={<Authenticate/>}/>
      <Route path='/Signed' element={<ProtectedApp/>}/>
    </Routes>
  );
}

export default App;
