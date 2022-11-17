import { useState, useEffect, useRef } from "react";

import TodoList from "./components/todoList";

import { Itodo } from "./types/data";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Itodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    value &&
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
    setValue("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.key === "Enter" && addTodo();
  };

  const removeTodo = (id: number): void => {
	setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
	setTodos(todos.map((todo) => {
		if(todo.id !== id) return todo;

		return {
			...todo,
			complete: !todo.complete
		}
	}))
  }

  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          className="border-2 border-solid shadow-inner"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;
