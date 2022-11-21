import { useTodoContext } from "../context/todoContext";
import TodoItem from "./todoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
