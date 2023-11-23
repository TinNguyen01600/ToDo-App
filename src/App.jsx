import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import Button from "@mui/material/Button";

function App() {
	// set up states
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [deadline, setDeadline] = useState("");
	const [status, setStatus] = useState("status");
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);

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

	function switchToEditMode(todo) {
        setEditMode(true)
        setTitle(todo.title)
        setDeadline(todo.deadline)
        setStatus(todo.status)
        setIsFormOpen(true)
    }

	return (
		<>
			<Button
				variant="contained"
				onClick={() => {
					setIsFormOpen(true);
				}}
			>
				Add a new todo
			</Button>
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
                    editMode={editMode}
				/>
			)}
			{todoList.length > 0 && (
				<ul>
					{todoList.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.title}
							switchToEditMode={switchToEditMode}
						/>
					))}
				</ul>
			)}
		</>
	);
}

export default App;
