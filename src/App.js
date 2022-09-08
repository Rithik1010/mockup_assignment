import Welcome from "./components/Welcome";
import SetUpHome from "./components/SetUpHome";
import Plan from "./components/Plan";
import Congratulation from "./components/Congratulation";

function App() {
	return (
		<div className="App">
			<Welcome />
			<hr />
			<SetUpHome />
			<hr />
			<Plan />
			<hr />
			<Congratulation />
		</div>
	);
}

export default App;
