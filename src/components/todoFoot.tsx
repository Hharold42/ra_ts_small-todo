import { useTodoContext } from "../context/todoContext"

const TodoFoot = () => {
	const { removeTodo } = useTodoContext()
  return (
	<div className="todo__foot">
		<div>
			ALL
		</div>
		<div>
			UNDONE
		</div>
		<div>
			DONE
		</div>
		<div onClick={() => removeTodo()}>
			REMOVE
		</div>
	</div>
  )
}

export default TodoFoot