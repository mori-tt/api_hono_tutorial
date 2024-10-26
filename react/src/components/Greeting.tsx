import { PropsWithChildren } from 'react';

import { useMessage } from '../state/counterAtom';

type Props = {
  names: string[];
};

export const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  const message = useMessage();

  return (
    <>
      {names.map((name) => {
        return <h1 key={name}>こんにちは {name}</h1>;
      })}
      {children}
      <p className="text-3xl">{message}</p>
    </>
  );
};
