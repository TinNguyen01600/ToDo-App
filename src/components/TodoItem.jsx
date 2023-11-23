export default function TodoItem(props) {
	const { title, deadline, status } = props.todo;
	return (
		<li onClick={() => props.switchToEditMode(props.todo)}>
			{title} {deadline} {status}
		</li>
	);
}
