import React from 'react';
import { CustomEvent } from './customEvent';

interface EventDetailsProps {
  event: CustomEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">{event.name}</h2>
      <p className="text-lg">Date: {event.date}</p>
      <p className="text-lg">Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
