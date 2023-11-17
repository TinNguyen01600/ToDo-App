import { useState } from 'react'
import './App.css'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const [status, setStatus] = useState("status")
    const [todoList, setTodoList] = useState([])

    return (
        <>
            <button onClick={() => {setIsOpen(true)}}>Add a new todo</button>
            {isOpen && <form>
                <input type="text" name="title" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" name="deadline" value={deadline} placeholder='Deadline' onChange={(e) => setDeadline(e.target.value)} />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                </select>
                <input type="submit" value="Add" onClick={() => {setIsOpen(false)}} />
            </form>}
            <p>{title} {deadline} {status}</p>
        </>
    )
}

export default App
