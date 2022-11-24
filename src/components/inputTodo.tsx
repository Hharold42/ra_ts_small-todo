import { useRef, useEffect } from "react";
import { useTodoContext } from "../context/todoContext";
import "./todo.scss";

const InputTodo = () => {
  const { value, handleChange, handleKeyDown, addTodo } = useTodoContext();

  const todoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
	todoRef.current?.focus()
  }, []);

  return (
    <div>
      <div className="todo__input">
        <input
          value={value}
          onChange={handleChange}
          className="todo__input__input-field"
          onKeyDown={handleKeyDown}
          placeholder="Type your todo's here..."
          ref={todoRef}
        />
        <button onClick={addTodo} className="todo__input__button">
          ADD
        </button>
      </div>
    </div>
  );
};

export default InputTodo;
