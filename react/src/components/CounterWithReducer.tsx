import { useReducer } from 'react';

type State = { count: number };

const initialState: State = { count: 0 };

const reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const IncrementAction = {
  type: 'increment',
  payload: 1,
};
type ActionTypes = typeof IncrementAction;

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card flex flex-col items-center">
      <button
        className="btn btn-primary w-1/2 text-xl"
        onClick={() => {
          dispatch(IncrementAction);
        }}
      >
        count is {state.count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
