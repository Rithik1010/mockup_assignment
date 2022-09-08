import { useState } from "react";

function SetUpHome() {

	const [workSpace, setWorkSpace] = useState({ name: "", url: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(workSpace.name + " " + workSpace.url);
	}

	return (
		<div>
			<h1>Let's set up a home for all your work</h1>
			<p>You can always create another workspace later.</p>
			<form onSubmit={handleSubmit}>
				<label>Workspace Name</label>
				<br />
				<input 
					type="text" 
					placeholder="Eden" 
					onChange={(e) => setWorkSpace({...workSpace, name: e.target.value})}
				/>
				<br />
				<label>Workspace URL (optional)</label>
				<br />
				<input 
					type="text" 
					placeholder="Example" 
					onChange={(e) => setWorkSpace({...workSpace, url: e.target.value})}
				/>
				<br />
				<input type="submit" value="Create Workspace" />
			</form>
		</div>
	)
}

export default SetUpHome