import React, { useState } from 'react';
import { CustomEvent } from './customEvent';

interface EventFormProps {
  onAddEvent: (event: CustomEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: CustomEvent = { id: Date.now(), name, date, location };
    onAddEvent(newEvent);
    setName('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-lg font-semibold">Event Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
