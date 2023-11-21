export default function Todo(props) {
	const { title, deadline, status } = props.todo;
	return (
		<span>
			{title} {deadline} {status}
		</span>
	);
}
