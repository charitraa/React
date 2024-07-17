// src/App.tsx
import React, { useState } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import EventDetails from './EventDetails';
import { CustomEvent } from './customEvent';

const App: React.FC = () => {
  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  const addEvent = (event: CustomEvent) => {
    setEvents([...events, event]);
  };

  const selectEvent = (event: CustomEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Event Registration</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} onSelect={selectEvent} />
      {selectedEvent && <EventDetails event={selectedEvent} />}
    </div>
  );
};

export default App;
