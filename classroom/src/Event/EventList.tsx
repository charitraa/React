// src/components/EventList.tsx
import React from 'react';
import { CustomEvent } from './customEvent';

interface EventListProps {
  events: CustomEvent[];
  onSelect: (event: CustomEvent) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onSelect }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} onClick={() => onSelect(event)}>
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
