import { useForm, SubmitHandler } from "react-hook-form";
import { usePostTodo } from "../api/todos";

type FormData = {
  title: string;
};

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const { mutate } = usePostTodo();

  const submitForm: SubmitHandler<FormData> = (data) => {
    if (!data.title) return;
    mutate({ body: { title: data.title } }, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {errors.title && <p>タイトルを入力してください</p>}
      <input type="text" {...register("title", { required: true })} />
      <button className="btn btn-primary btn-sm">追加</button>
    </form>
  );
};
