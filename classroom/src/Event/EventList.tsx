import React from 'react';
import { CustomEvent } from './customEvent';

interface EventListProps {
  events: CustomEvent[];
  onSelect: (event: CustomEvent) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Event List</h2>
      {events.length === 0 ? (
        <p className="text-lg text-gray-500">
          No events found. Please add some events.
        </p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            onClick={() => onSelect(event)}
            className="mb-4 p-2 border-b cursor-pointer hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-lg">Date: {event.date}</p>
            <p className="text-lg">Location: {event.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
