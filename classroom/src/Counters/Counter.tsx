import { useState } from 'react';
import CounterChild from './Counterchild';

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="text-center mt-8">
      <CounterChild
        count={count}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
      {/* <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button> */}
    </div>
  );
};

export default CounterParent;
