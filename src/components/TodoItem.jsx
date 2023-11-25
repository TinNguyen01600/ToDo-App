import ListItemButton from '@mui/material/ListItemButton';

const TodoItem = (props) => {
    const { id, title, deadline, status } = props.todo
    return (
        <>
            <ListItemButton
                sx={status === "In progress"
                    ? inProgressStyles
                    : status === "Not started"
                        ? notStartedStyles
                        : doneStyles}
                id='todo-item'
                onClick={() => props.switchToEditMode(props.todo)}
            >
                <h3>{title}</h3>
                <p>Deadline: {deadline}</p>
            </ListItemButton>
        </>
    );
}
const inProgressStyles = { borderLeft: '10px solid yellow' }
const notStartedStyles = { borderLeft: '10px solid red' }
const doneStyles = { borderLeft: '10px solid green' }

export default TodoItem