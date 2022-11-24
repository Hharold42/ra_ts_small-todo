import Todo from "./components/Todo";
import TodoState from "./context/todoContext";

const App: React.FC = () => {
  return (
    <TodoState>
		<Todo/>
	</TodoState>
  );
};

export default App;
