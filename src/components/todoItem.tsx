import { useTodoContext } from "../context/todoContext";
import { Itodo } from "../types/data";

interface ITodoItem extends Itodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, selected } = props;
  const { toggleTodo, selectTodo } = useTodoContext();

  return (
    <div className={`todo__item ${selected && "--selected"}`} onClick={() => selectTodo(id)}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
        className="todo__item__check"
      />
      <span className="todo__item__title">
        {title}
      </span>
    </div>
  );
};

export default TodoItem;
