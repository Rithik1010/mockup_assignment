import { useState } from 'react'

function Welcome(props) {

	const [user, setUser] = useState({ full_name: "", display_name: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		props.user_callback(user);
	}

	return (
		<div>
			<h1>Welcome! First things first...</h1>
			<p>You can always change them later.</p>
			<form onSubmit={handleSubmit} >
				<div class="form-group">
					<label for="full_name">Full Name</label>
					<input
						id="full_name"
						className="form-control"
						type="text"
						placeholder="Steve Jobs"
						onChange={(e) => setUser({...user, full_name: e.target.value})}
					/>
				</div>
				<div>
					<label for="display_name">Display Name</label>
					<input
						id="display_name"
						className="form-control"
						type="text"
						placeholder="Steve"
						onChange={(e) => setUser({...user, display_name: e.target.value})}
					/>
				</div>
				<input type="submit" value="Create Workspace" className="btn btn-primary" />
			</form>
		</div>
	)
}

export default Welcome