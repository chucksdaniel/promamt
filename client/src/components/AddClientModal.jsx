import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import { ADD_CLIENT } from "../mutation/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function AddClientModal() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const [addClient] = useMutation(ADD_CLIENT, {
		variables: { name, email, phone },
		update(cache, { data: { addClient } }) {
			const { clients } = cache.readQuery({ query: GET_CLIENTS });
			cache.writeQuery({
				query: GET_CLIENTS,
				// data: { clients: clients.concat([addClient]) },
				data: { clients: [...clients, addClient] },
			});
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(name, email, phone);

		if (!name || !email || !phone) {
			return alert("Please fill in all fields");
		}

		addClient(name, email, phone);
		setName("");
		setEmail("");
		setPhone("");
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#addClientModal"
			>
				<div className="d-flex align-items-center">
					<FaUser className="icon" />
					<div>Add Client</div>
				</div>
			</button>
			<div
				className="modal fade"
				id="addClientModal"
				aria-labelledby="addClientModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addClientModelLabel">
								Add Client
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
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
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Phone</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Add Client
								</button>
							</form>
						</div>
						{/* <div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}
