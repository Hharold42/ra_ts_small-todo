import { useTodoContext } from "../context/todoContext";

const InputTodo = () => {
  const { value, handleChange, handleKeyDown, addTodo } = useTodoContext();

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          className="border-2 border-solid shadow-inner"
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default InputTodo;
