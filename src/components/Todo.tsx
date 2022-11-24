import InputTodo from "./inputTodo";
import TodoList from "./todoList";
import "./todo.scss";
import TodoFoot from "./todoFoot";

const Todo = () => {
  console.log("wtf todo");

  return (
    <div className="todo">
      <span className="todo__title">todos</span>
        <InputTodo />
        <TodoList />
		<TodoFoot />
    </div>
  );
};

export default Todo;
