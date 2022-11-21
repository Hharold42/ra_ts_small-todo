import { useTodoContext } from "../context/todoContext";
import { Itodo } from "../types/data";

interface ITodoItem extends Itodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete } = props;
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span className="inline-block ml-2">{title}</span>
      <button
        onClick={() => removeTodo(id)}
        className="bg-transparent text-red-500 ml-2"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
