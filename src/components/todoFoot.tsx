import { useTodoContext } from "../context/todoContext";
import { buttons } from "../data/buttons";

const TodoFoot = () => {
  console.log(buttons);

  const { removeTodo, changeMode } = useTodoContext();
  return (
    <div className="todo__foot">
      {buttons &&
        buttons.map((button, index) => (
          <button
            key={index}
            value={button.value}
            onClick={
              button.filter === true
                ? () => changeMode(button.value)
                : removeTodo
            }
          >
            {button.name}
          </button>
        ))}
    </div>
  );
};

export default TodoFoot;
