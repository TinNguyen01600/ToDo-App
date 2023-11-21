import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todo from "./todo";

function App() {
	// set up states
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [deadline, setDeadline] = useState("");
	const [status, setStatus] = useState("status");
	const [todoList, setTodoList] = useState([]);

	// functions to handle events
	function handleAddButton() {
		setIsFormOpen(false);

		const newTodo = { title: title, deadline: deadline, status: status };
		setTodoList([...todoList, newTodo]);

		setTitle("");
		setDeadline("");
		setStatus("status");
	}

	function handleTitleChange(event) {
		setTitle(event.target.value);
	}

	function handleDeadlineChange(event) {
		setDeadline(event.target.value);
	}

	function handleStatusChange(event) {
		setStatus(event.target.value);
	}

	return (
		<>
			<button
				onClick={() => {
					setIsFormOpen(true);
				}}
			>
				Add a new todo
			</button>
			{isFormOpen && (
				<Form
					title={title}
					deadline={deadline}
					status={status}
					handleTitleChange={handleTitleChange}
					handleDeadlineChange={handleDeadlineChange}
					handleStatusChange={handleStatusChange}
					handleAddButton={handleAddButton}
					setIsFormOpen={setIsFormOpen}
				/>
			)}
			{todoList.length > 0 && (
				<div>
					{todoList.map(todo => (
						<Todo todo={todo} key={todo.title} />
					))}
				</div>
			)}
		</>
	);
}

export default App;
