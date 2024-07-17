import React, { useState } from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import EventDetails from './EventDetails';
import { CustomEvent } from './customEvent';

const Event: React.FC = () => {
  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  const addEvent = (event: CustomEvent) => {
    setEvents([...events, event]);
  };

  const selectEvent = (event: CustomEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Event Registration
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventForm onAddEvent={addEvent} />
        <EventList events={events} onSelect={selectEvent} />
      </div>
      {selectedEvent && (
        <div className="mt-6">
          <EventDetails event={selectedEvent} />
        </div>
      )}
    </div>
  );
};

export default Event;
