import { useState } from 'react'
import './App.css'

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const [status, setStatus] = useState("status")
    const [todoList, setTodoList] = useState([])

    function handleAddButton() {
        setIsFormOpen(false)

        const newTodo = {title: title, deadline: deadline, status: status}
        setTodoList([...todoList, newTodo])
    }

    return (
        <>
            <button onClick={() => {setIsFormOpen(true)}}>Add a new todo</button>
            {isFormOpen && <form id="todo-form">
                <input type="text" name="title" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" name="deadline" placeholder='Deadline' onChange={(e) => setDeadline(e.target.value)} />
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="In progress">In progress</option>
                    <option value="Not started">Not started</option>
                    <option value="Done">Done</option>
                </select>
                <input type="button" value="Add" onClick={() => handleAddButton()} />
                <input type="button" value="Cancel" onClick={() => setIsFormOpen(false)} />
            </form>}
            {(todoList.length > 0) ? <div>
                {todoList.map((todo) => <p>{todo.title} {todo.deadline} {todo.status}</p>)}
            </div> : <p></p>}
        </>
    )
}

export default App
