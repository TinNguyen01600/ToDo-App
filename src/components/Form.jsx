import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Form(props) {
	return (
		<form id="todo-form">
			<label id="label" htmlFor="">
				Add new todo
			</label>
			<TextField
				size="small"
				label="Title"
				variant="outlined"
				sx={{ backgroundColor: "white" }}
				id="title"
				value={props.title}
				name="title"
				onChange={props.handleTitleChange}
			/>
			<TextField
				size="small"
				label="Deadline"
				variant="outlined"
				sx={{ backgroundColor: "white" }}
				id="deadline"
				value={props.deadline}
				name="deadline"
				onChange={props.handleDeadlineChange}
			/>
			<FormControl sx={{ backgroundColor: "white" }} size="small">
				<InputLabel id="demo-simple-select-label">Status</InputLabel>
				<Select
					id="status"
					value={props.status}
					label="status"
					onChange={props.handleStatusChange}
				>
					<MenuItem value="In progress">In progress</MenuItem>
					<MenuItem value="Not started">Not started</MenuItem>
					<MenuItem value="Done">Done</MenuItem>
				</Select>
			</FormControl>
			<div id="btn-ctn">
				<Button
					size="small"
					variant="contained"
					id="add"
					value="Add"
					onClick={
						props.editMode
							? props.handleEdit
							: props.handleAddButton
					}
				>
					{props.editMode ? "Update" : "Add new todo"}
				</Button>
				<Button
					size="small"
					variant="outlined"
					id="cancel"
					value="cancel"
					onClick={props.handleClearForm}
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}
