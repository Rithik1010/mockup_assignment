import { useState } from 'react'

function Welcome(props) {

	const [user, setUser] = useState({ full_name: "", display_name: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		props.callback(user);
	}

	return (
		<div>
			<h1>Welcome! First things first...</h1>
			<p>You can always change them later.</p>
			<form onSubmit={handleSubmit} >
				<label>Full Name</label>
				<br />
				<input
					type="text"
					placeholder="Steve Jobs"
					onChange={(e) => setUser({...user, full_name: e.target.value})}
				/>
				<br />
				<label>Display Name</label>
				<br />
				<input
					type="text"
					placeholder="Steve"
					onChange={(e) => setUser({...user, display_name: e.target.value})}
				/>
				<br />
				<input type="submit" value="Create Workspace" />
			</form>
		</div>
	)
}

export default Welcome