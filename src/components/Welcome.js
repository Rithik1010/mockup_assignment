import { useState } from 'react'

function Welcome(props) {

	const [user, setUser] = useState({ full_name: "", display_name: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = e.currentTarget.checkValidity();
		if(!isValid)	e.stopPropagation();
		else 			props.user_callback(user);
		document.querySelectorAll('.needs-validation')[0].classList.add('was-validated');
	}

	return (
		<div>
			<h2 className="text-center">Welcome! First things first...</h2>
			<p className="text-center spacing">You can always change them later.</p>
			<form onSubmit={handleSubmit} className="needs-validation" noValidate>
				<div className="form-group">
					<label for="full_name" className="name-tag">Full Name</label>
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Steve Jobs"
						onChange={(e) => setUser({...user, full_name: e.target.value})}
						required
					/>
				</div>
				<div className="form-group">
					<label for="display_name" className="name-tag">Display Name</label>
					<input
						id="display_name"
						className="form-control form-control-lg"
						type="text"
						placeholder="Steve"
						onChange={(e) => setUser({...user, display_name: e.target.value})}
						required
					/>
				</div>
				<div className="text-center">
					<input type="submit" value="Create Workspace" className="btn btn-primary button" />
				</div>
			</form>
		</div>
	)
}

export default Welcome