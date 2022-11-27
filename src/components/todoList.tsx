import { useTodoContext } from "../context/todoContext";
import { Itodo } from "../types/data";
import TodoItem from "./todoItem";

const TodoList = () => {
  const { todos, mode } = useTodoContext();

  //! need to get rid of switch case.....
  const ownFilter = (todo: Itodo) => {
    switch (mode) {
      case "a":
        return true;
      case "d":
        return todo.complete;
      case "u":
        return !todo.complete;
      default:
        break;
    }
  };

  return (
    <div className="todo__list">
      {todos.length === 0 && (
        <div className="pl-[1.5rem] pt-[4px]">No todos yet</div>
      )}
      {todos
        .filter((todo) => ownFilter(todo))
        .map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
    </div>
  );
};

export default TodoList;
