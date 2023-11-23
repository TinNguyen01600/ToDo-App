// export default function Form(
//     {title, status, deadline,
//     handleTitleChange,
//     handleDeadlineChange,
//     handleStatusChange,
//     handleAddButton,
//     setIsFormOpen}
// ) {
//     return (
//         <form id="todo-form">
//             <input type="text" value={title} name="title" placeholder='Title' onChange={handleTitleChange} />
//             <input type="text" value={deadline} name="deadline" placeholder='Deadline' onChange={handleDeadlineChange} />
//             <select value={status} onChange={handleStatusChange}>
//                 <option value="status">Status</option>
//                 <option value="In progress">In progress</option>
//                 <option value="Not started">Not started</option>
//                 <option value="Done">Done</option>
//             </select>
//             <input type="button" value="Add" onClick={handleAddButton} />
//             <input type="button" value="Cancel" onClick={() => setIsFormOpen(false)} />
//         </form>
//     )
// }

import Button from "@mui/material/Button";

export default function Form(props) {
	return (
		<form id="todo-form">
			<label id="label" htmlFor="">
				Add new todo
			</label>
			<input
				id="title"
				type="text"
				value={props.title}
				name="title"
				placeholder="Title"
				onChange={props.handleTitleChange}
			/>
			<input
				id="deadline"
				type="text"
				value={props.deadline}
				name="deadline"
				placeholder="Deadline"
				onChange={props.handleDeadlineChange}
			/>
			<select
				id="status"
				value={props.status}
				onChange={props.handleStatusChange}
			>
				<option value="status">Status</option>
				<option value="In progress">In progress</option>
				<option value="Not started">Not started</option>
				<option value="Done">Done</option>
			</select>
			<div id="btn-ctn">
				<Button
					size="small"
					variant="contained"
					id="add"
					value="Add"
					onClick={props.handleAddButton}
				>
					Add a new todo
				</Button>
				<Button
					size="small"
					variant="outlined"
					id="cancel"
					value="cancel"
					onClick={() => props.setIsFormOpen(false)}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}
