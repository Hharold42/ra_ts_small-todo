import { Itodo } from "../types/data";
import TodoItem from "./todoItem";

interface ITodoList {
  items: Itodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { items, toggleTodo, removeTodo } = props;

  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
