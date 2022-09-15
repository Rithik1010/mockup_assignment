import { useState } from "react";

function SetUpHome(props) {

	const [workSpace, setWorkSpace] = useState({ name: "", url: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = e.currentTarget.checkValidity();
		if(!isValid)	e.stopPropagation();
		else 			props.stage_callback("plan");
		document.querySelectorAll('.needs-validation')[0].classList.add('was-validated');
	}

	return (
		<div>
			<h2 className="text-center">Let's set up a home for all your work</h2>
			<p className="text-center spacing">You can always create another workspace later.</p>
			<form onSubmit={handleSubmit} className="needs-validation" noValidate>
				<div className="form-group">
					<label for="name" className="name-tag">Workspace Name</label>
					<div className="text-center">
						<input 
							id="name"
							className="form-control form-control-lg"
							type="text" 
							placeholder="Eden" 
							onChange={(e) => setWorkSpace({...workSpace, name: e.target.value})}
							required
						/>
					</div>
				</div>
				<div className="form-group">
					<div>
						<label for="url" className="name-tag in-same-line">Workspace URL</label>
						<p className="gap-to-left in-same-line">(optional)</p>
					</div>
					<div className="input-group input-group-lg">
						<div className="input-group-prepend">
							<div className="input-group-text" id="inputGroup-sizing-lg">www.eden.com/</div>
						</div>
						<input 
							id="url"
							className="form-control"
							type="text" 
							placeholder="Example" 
							onChange={(e) => setWorkSpace({...workSpace, url: e.target.value})}
							required
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