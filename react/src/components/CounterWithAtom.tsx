import { useCounter } from '../state/counterAtom';

export const CounterWithAtom = () => {
  const [count, setCount] = useCounter();

  const handleClick = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="card flex flex-col items-center">
      <button className="btn btn-primary w-1/2 text-xl" onClick={handleClick}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
