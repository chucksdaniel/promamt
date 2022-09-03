import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATED_PROJECT } from "../mutation/projectMutation";

export default function EditProjectForm({ project }) {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState("");

	const [updateProject] = useMutation(UPDATED_PROJECT, {
		variables: { id: project.id, name, description, status },
		refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (!name || !description || !status) {
			return alert("Please fill all fields");
		}
		console.log(name, description, status);

		updateProject(name, description, status);
	};

	return (
		<div className="mt-3">
			<form onSubmit={onSubmit}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea
						className="form-control"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					>
						{" "}
					</textarea>
				</div>
				<div className="mb-3">
					<label className="form-label">Status</label>
					<select
						id="status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						className="form-select"
					>
						<option value="new">Not Started</option>
						<option value="progress">In Progress</option>
						<option value="completed">Completed</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
