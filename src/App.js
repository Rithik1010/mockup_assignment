import { useState } from "react";
import Welcome from "./components/Welcome";
import SetUpHome from "./components/SetUpHome";
import Plan from "./components/Plan";
import Congratulation from "./components/Congratulation";

function App() {
	const [user, setUser] = useState({full_name: "", display_name: ""});
	const [stage, setStage] = useState("Welcome");

	const user_callback = (user_obj) => {
		setUser({
            full_name: user_obj.full_name,
            display_name: user_obj.display_name
        });
		setStage("setUpHome");
	}

	const stage_callback = (stage) => {
		setStage(stage);
	}

	return (
		<div className="App">
			{stage === "Welcome" && <Welcome user_callback={user_callback} />}
			{stage === "setUpHome" && <SetUpHome stage_callback={stage_callback} />}
			{stage === "plan" && <Plan stage_callback={stage_callback} />}
			{stage === "congratulation" && <Congratulation user={user} />}
		</div>
	);
}

export default App;
