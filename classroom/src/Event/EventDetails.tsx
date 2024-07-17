// src/components/EventDetails.tsx
import React from 'react';
import { CustomEvent } from './customEvent';

interface EventDetailsProps {
  event: CustomEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-bold">{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
