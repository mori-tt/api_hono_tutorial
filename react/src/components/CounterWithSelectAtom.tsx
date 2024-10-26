import { useCount } from '../state/counterAtom';

export const CounterWithSelectAtom = () => {
  const [count, increment] = useCount();

  return (
    <div className="card flex flex-col items-center">
      <button className="btn btn-primary w-1/2 text-xl" onClick={increment}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
