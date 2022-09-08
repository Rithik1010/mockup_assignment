import { useState } from "react";

function SetUpHome(props) {

	const [workSpace, setWorkSpace] = useState({ name: "", url: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		props.stage_callback("plan");
	}

	return (
		<div>
			<h1>Let's set up a home for all your work</h1>
			<p>You can always create another workspace later.</p>
			<form onSubmit={handleSubmit}>
				<div class="form-group">
					<label for="name">Workspace Name</label>
					<input 
						id="name"
						className="form-control"
						type="text" 
						placeholder="Eden" 
						onChange={(e) => setWorkSpace({...workSpace, name: e.target.value})}
					/>
				</div>
				<div class="form-group">
					<label for="url">Workspace URL (optional)</label>
					<div class="input-group mb-2">
						<div class="input-group-prepend">
							<div class="input-group-text">www.eden.com/</div>
						</div>
						<input 
							id="url"
							className="form-control"
							type="text" 
							placeholder="Example" 
							onChange={(e) => setWorkSpace({...workSpace, url: e.target.value})}
						/>
					</div>
				</div>
				<input type="submit" value="Create Workspace" className="btn btn-primary" />
			</form>
		</div>
	)
}

export default SetUpHome