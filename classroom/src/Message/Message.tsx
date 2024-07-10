import { useState } from 'react';
import MessageChild from './Messagechild';

const MessageParent = () => {
  const [message, setMessage] = useState('');

  const updateMessage = () => {
    setMessage(' Hey, I am Hacker');
  };

  return (
    <div className="text-center mt-8">
      <MessageChild message={message} />
      <button
        className="px-4 py-2 mt-4 text-lg bg-purple-500 text-white rounded"
        onClick={updateMessage}
      >
        Update Message
      </button>
    </div>
  );
};

export default MessageParent;
