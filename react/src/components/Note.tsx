import { memo } from 'react';

type Props = {
  now: number;
  handleClick: () => void;
};

export const Note = memo(({ now }: Props) => {
  return <p className="text-3xl">Time is: {now}</p>;
});
