import { createContext, useContext, useState } from "react";
import { Itodo } from "../types/data";

interface ITodoContext {
  todos: Itodo[];
  mode: string;
  value: string;
  changeMode: (mode: string) => void;
  selectTodo: (id: number) => void;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
  removeTodo: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

// createing context
const TodoContext = createContext<ITodoContext>({
  todos: [],
  mode: "",
  value: "",
  changeMode: () => {},
  selectTodo: () => {},
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
  handleChange: () => {},
  handleKeyDown: () => {},
});

// exporting context
export const useTodoContext = () => useContext(TodoContext);

//! needs refactoring
const TodoState = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Itodo[]>([]); // All todos array
  const [value, setValue] = useState(""); // Input string
  const [mode, setMode] = useState("d"); // filter. 'a' - all todo's, 'd' - done todo's, 'u' - undone todo's

  // change filter
  const changeMode = (mode: string): void => {
    setMode(mode);
  };

  // function to highlight todo
  const selectTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo
      )
    );
  };

  const addTodo = () => {
    value &&
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
          selected: false,
        },
      ]);
    setValue("");
  };

  const removeTodo = (): void => {
    setTodos(todos.filter((todo) => todo.selected !== true));
  };

  // check and uncheck task
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
        mode,
        changeMode,
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
