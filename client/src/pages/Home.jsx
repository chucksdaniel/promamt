import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
	return (
		<>
			<div className="d-flex gap-3">
				<AddClientModal />
				<AddProjectModal />
			</div>
			<Projects />
			<hr />
			<Clients />
		</>
	);
}
