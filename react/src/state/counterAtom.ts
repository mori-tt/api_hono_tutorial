import { atom, useAtom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';

const counterAtom = atom(0);
export const useCounter = () => useAtom(counterAtom);

const appStateAtom = atom({ count: 0, message: '10未満' });
// export const useAppState = () => useAtom(appStateAtom);

const messageAtom = selectAtom(appStateAtom, (state) => state.message);
export const useMessage = () => useAtomValue(messageAtom);

export const useCount = (): [number, () => void] => {
  const [{ count }, setState] = useAtom(appStateAtom);
  const increment = () =>
    setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
        message: prev.count + 1 < 10 ? '10未満' : '10以上',
      };
    });

  return [count, increment];
};
