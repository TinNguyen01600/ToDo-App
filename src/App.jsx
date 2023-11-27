import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import StatusIndicator from "./components/StatusIndicator";
import Button from "@mui/material/Button";

function App() {
	// set up states
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [title, setTitle] = useState("")
	const [deadline, setDeadline] = useState("")
	const [status, setStatus] = useState("")
	const [todoList, setTodoList] = useState([])
	const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState(0)
    const [updateId, setUpdateId] = useState(null)

	// functions to handle events
	function handleAddButton() {
		const newTodo = { id: id, title: title, deadline: deadline, status: status };
		setTodoList([...todoList, newTodo]);
        setId(id+1)
		handleClearForm()
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

    function handleClearForm() {
        setIsFormOpen(false)
        setEditMode(false)
        setTitle("");
		setDeadline("");
		setStatus("");
    }

	function switchToEditMode(todo) {
        setEditMode(true)
        setIsFormOpen(true)

        setTitle(todo.title)
        setDeadline(todo.deadline)
        setStatus(todo.status)
        setUpdateId(todo.id)
    }

    function handleEdit() {
        const foundIndex = todoList.findIndex(todo => todo.id === updateId)
        const newlyEditedTodo = { id: updateId, title: title, deadline: deadline, status: status };
        todoList.splice(foundIndex, 1, newlyEditedTodo)     // replace {todo} at position {foundIndex} with {newlyEditedTodo}
        handleClearForm()
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
					handleClearForm={handleClearForm}
                    editMode={editMode}
                    handleEdit={handleEdit}
				/>
			)}
			{todoList.length > 0 && (
				<ul>
					{todoList.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.id}
							switchToEditMode={switchToEditMode}
						/>
					))}
				</ul>
			)}
            <StatusIndicator />
		</>
	);
}

export default App;
