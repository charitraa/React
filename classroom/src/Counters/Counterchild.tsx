interface Props {
  count: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
}

const CounterChild = ({ count, incrementCounter, decrementCounter }: Props) => {
  return (
    <div className="text-lg mb-4">
      <p>Current Count: {count}</p>
      <div>
        <button
          className="px-4 py-2 mt-4 mr-2 text-lg bg-green-500 text-white rounded"
          onClick={incrementCounter}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 mt-4 text-lg bg-red-500 text-white rounded"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterChild;
