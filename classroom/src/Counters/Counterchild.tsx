interface Props {
  count: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
}

const CounterChild = ({ count, incrementCounter, decrementCounter }: Props) => {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CounterChild;
