import { ReactIcon } from '../components/ReactIcon';
import { ViteIcon } from '../components/ViteIcon';
import { Greeting } from '../components/Greeting';
// import { Counter } from '../components/Counter';
// import { ObjectCounter } from '../components/ObjectCounter';
// import {CounterWithReducer} from '../components/CounterWithReducer';
// import { CounterWithAtom } from '../components/CounterWithAtom';
import { CounterWithSelectAtom } from '../components/CounterWithSelectAtom';

export const Index = () => {
  return (
    <>
      <div>
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={['React', 'Vite']} />
      <CounterWithSelectAtom />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
