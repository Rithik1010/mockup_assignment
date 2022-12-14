import { useState } from "react";
import person_icon from "../images/individual.png";
import team_icon from "../images/team.png";

function Plan(props) {

	const [usage, setUsage] = useState("myself");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.stage_callback("congratulation");
	}

	return (
		<div>
			<h2 className="text-center">How are you planning to use Eden?</h2>
			<p className="text-center spacing2">We'll streamline your setup experience accordingly.</p>
			<form onSubmit={handleSubmit} className="container">
				<div className="row">
					<div className={"col-md-6 column column1 " + ((usage === "myself") ? "add-border" : null)} onClick={(e) => setUsage("myself")}>
						<img src={person_icon} alt="individual_icon" className="icon" />
						<h6 className="bold_it">For myself</h6>
						<p>Write better. Think more clearly. Stay organized</p>
					</div>
					<div className={"col-md-6 column column2 " + ((usage === "team") ? "add-border" : null)} onClick={(e) => setUsage("team")}>
						<img src={team_icon} alt="team_icon" className="icon" />
						<h6 className="bold_it">With my team</h6>
						<p>Wikis, docs, tasks &amp; projects, all in one place.</p>
					</div>
				</div>
				<div className="text-center">
					<input type="submit" value="Create Workspace" className="btn btn-primary button" />
				</div>
			</form>
		</div>
	)
}

export default Plan