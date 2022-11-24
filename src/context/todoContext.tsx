import { createContext, useContext, useState } from "react";
import { Itodo } from "../types/data";

interface ITodoContext {
  todos: Itodo[];
  value: string;
  selectTodo: (id: number) => void;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
  removeTodo: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TodoContext = createContext<ITodoContext>({
  todos: [],
  value: "",
  selectTodo: () => {},
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
  handleChange: () => {},
  handleKeyDown: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

const TodoState = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Itodo[]>([]);
  const [value, setValue] = useState("");

  const selectTodo = (id: number): void => {
	setTodos(todos.map(todo => todo.id === id ? {...todo, selected: !todo.selected} : todo))
  }

  const addTodo = () => {
    value &&
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
		  selected: false
        },
      ]);
    setValue("");
  };

  const removeTodo = (): void => {
    setTodos(todos.filter((todo) => todo.selected !== true));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.key === "Enter" && addTodo();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        value,
		selectTodo,
        addTodo,
        removeTodo,
        toggleTodo,
        handleChange,
        handleKeyDown,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
