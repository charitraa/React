import { useState } from 'react';

const CounterFunction = () => {
  const [change, setchange] = useState(0);
  return (
    <div>
      <p>Count:{change}</p>
      <button onClick={() => setchange(change + 1)}> Increment</button>
      <button onClick={() => setchange(change - 1)}> Decrement</button>
    </div>
  );
};

export default CounterFunction;
