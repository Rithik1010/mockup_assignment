import { useState } from "react";

function SetUpHome(props) {

	const [workSpace, setWorkSpace] = useState({ name: "", url: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		props.stage_callback("plan");
	}

	return (
		<div>
			<h2 className="text-center">Let's set up a home for all your work</h2>
			<p className="text-center spacing">You can always create another workspace later.</p>
			<form onSubmit={handleSubmit}>
				<div className="form-group input-field">
					<label for="name">Workspace Name</label>
					<div className="text-center">
						<input 
							id="name"
							className="form-control"
							type="text" 
							placeholder="Eden" 
							onChange={(e) => setWorkSpace({...workSpace, name: e.target.value})}
						/>
					</div>
				</div>
				<div className="form-group">
					<label for="url">Workspace URL (optional)</label>
					<div className="input-group mb-2 input-field">
						<div className="input-group-prepend">
							<div className="input-group-text">www.eden.com/</div>
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
				<div className="text-center">
					<input type="submit" value="Create Workspace" className="btn btn-primary button" />
				</div>
			</form>
		</div>
	)
}

export default SetUpHome