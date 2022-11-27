import InputTodo from "./inputTodo";
import TodoList from "./todoList";
import "./todo.scss";
import TodoFoot from "./todoFoot";

const Todo = () => {
  return (
    <div className="todo">
      <span className="todo__title mb-4">to-do list</span>
      <InputTodo />
      <TodoList />
      <TodoFoot />
    </div>
  );
};

export default Todo;
