import { useTodoContext } from "../context/todoContext";
import TodoItem from "./todoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div className="todo__list">
      {todos.length === 0 && <div className="pl-[1.5rem]">No todos yet</div>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
