import { useState } from 'react'
import './App.css'
import Form from './form'

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

        const newTodo = { title: title, deadline: deadline, status: status }
        setTodoList([...todoList, newTodo])

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
            {isFormOpen && <Form 
                title={title}
                deadline={deadline}
                status={status}
                handleTitleChange={handleTitleChange}
                handleDeadlineChange={handleDeadlineChange}
                handleStatusChange={handleStatusChange}
                handleAddButton={handleAddButton}
                setIsFormOpen={setIsFormOpen}
            />}
            {(todoList.length > 0) ? <div>
                {todoList.map((todo) => <p>{todo.title} {todo.deadline} {todo.status}</p>)}
            </div> : <p></p>}
        </>
    )
}

export default App
