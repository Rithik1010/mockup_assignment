import { useState } from "react";
import Welcome from "./components/Welcome";
import SetUpHome from "./components/SetUpHome";
import Plan from "./components/Plan";
import Congratulation from "./components/Congratulation";

function App() {
	const [user, setUser] = useState({full_name: "", display_name: ""});

	const callback = (user_obj) => {
		setUser({
            full_name: user_obj.full_name,
            display_name: user_obj.display_name
        });
	}

	return (
		<div className="App">
			<Welcome callback={callback} />
			<hr />
			<SetUpHome />
			<hr />
			<Plan />
			<hr />
			<Congratulation user={user} />
		</div>
	);
}

export default App;
