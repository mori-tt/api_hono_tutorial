import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "./generated/services.gen";
import {
  getTodosOptions,
  getTodosQueryKey,
  completeTodoMutation,
  createTodoMutation,
} from "./generated/@tanstack/react-query.gen";

client.setConfig({
  baseUrl: "http://localhost:3000",
});

const queryKey = getTodosQueryKey();

export const useGetTodos = () => useQuery(getTodosOptions());

export const usePatchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    ...completeTodoMutation(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    ...createTodoMutation(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });
};
