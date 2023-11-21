import { useState } from 'react'
import './App.css'

function App() {
    // set up states
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const [status, setStatus] = useState("status")
    const [todoList, setTodoList] = useState([])

    // functions to handle events
    function handleAddButton() {
        setIsFormOpen(false)

        const todoItem = { title: title, deadline: deadline, status: status }
        setTodoList([...todoList, todoItem])
        
        setTitle("")
        setDeadline("")
        setStatus("status")
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleDeadlineChange(event) {
        setDeadline(event.target.value)
    }

    function handleStatusChange(event) {
        setStatus(event.target.value)
    }

    // functional components
    function Button() {
        return (
            <button onClick={() => { setIsFormOpen(true) }}>Add a new todo</button>
        )
    }

    return (
        <>
            <Button />
            {isFormOpen && <form id="todo-form">
                <input type="text" value = {title} name="title" placeholder='Title' onChange={handleTitleChange}/>
                <input type="text" value = {deadline} name="deadline" placeholder='Deadline' onChange={handleDeadlineChange} />
                <select value = {status} onChange={handleStatusChange}>
                    <option value="status">Status</option>
                    <option value="In progress">In progress</option>
                    <option value="Not started">Not started</option>
                    <option value="Done">Done</option>
                </select>
                <input type="button" value="Add" onClick={handleAddButton} />
                <input type="button" value="Cancel" onClick={() => setIsFormOpen(false)} />
            </form>}
            {(todoList.length > 0) ? <div>
                {todoList.map((todo) => <p>{todo.title} {todo.deadline} {todo.status}</p>)}
            </div> : <p></p>}
        </>
    )
}

export default App
