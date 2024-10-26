import { ChangeEvent } from "react";

import { useGetTodos, usePatchTodo } from "../api/todos";
import { TodoForm } from "../components/TodoForm";

export const Todos = () => {
  const { data, isPending, error } = useGetTodos();
  const { mutate } = usePatchTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    mutate({ path: { id } });
  };

  if (isPending) {
    return <div>Loading... </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
      {data?.map(({ id, title, done }) => (
        <div key={id}>
          <input
            type="checkbox"
            id={`${id}`}
            value={id}
            checked={done ? true : false}
            onChange={handleChange}
          />
          <label htmlFor={`${id}`}>{title}</label>
        </div>
      ))}
    </div>
  );
};
