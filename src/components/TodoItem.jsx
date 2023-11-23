export default function TodoItem(props) {
	const { id, title, deadline, status } = props.todo;
	return (
		<li onClick={() => props.switchToEditMode(props.todo)}>
			{id} {title} {deadline} {status}
		</li>
	);
}
