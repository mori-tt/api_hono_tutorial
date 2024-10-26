// This file is auto-generated by @hey-api/openapi-ts

export type TodoId = number;

export type Todo = {
  id: TodoId;
  title: string;
  done?: boolean | null;
  doneAt?: string | null;
};

export type GetTodosResponse = Array<Todo>;

export type GetTodosError = unknown;

export type CreateTodoData = {
  body: {
    /**
     * The title of the todo
     */
    title: string;
  };
};

export type CreateTodoResponse = Todo;

export type CreateTodoError = unknown;

export type CompleteTodoData = {
  path: {
    id: string;
  };
};

export type CompleteTodoResponse = Todo;

export type CompleteTodoError = unknown;
