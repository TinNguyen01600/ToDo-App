export default function Todo(props) {
	const { title, deadline, status } = props.todo;
	return (
		<li>
			{title} {deadline} {status}
		</li>
	);
}
