import {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  PropsWithChildren,
} from 'react';
import { Note } from './Note';

export const Counter = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  // const now = Date.now();
  const memoizedNow = useMemo(() => Date.now(), []);

  const handleClick = useCallback(() => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }, []);

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log('effect');
    ref.current?.focus();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="card flex flex-col items-center">
      <button
        ref={ref}
        className="btn btn-primary w-1/2 text-xl"
        onClick={handleClick}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      {children}
      <Note now={memoizedNow} handleClick={handleClick} />
    </div>
  );
};
