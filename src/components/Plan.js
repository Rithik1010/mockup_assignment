function Plan(props) {

	const handleSubmit = (e) => {
		e.preventDefault();
		props.stage_callback("congratulation");
	}

	return (
		<div>
			<h1>How are you planning to use Eden?</h1>
			<p>We'll streamline your setup experienceaccordingly.</p>
			<form onSubmit={handleSubmit}>
				<h2>For myself</h2>
				<p>Write better. Think more clearly. Stay organized</p>
				<h2>With my team</h2>
				<p>Wikis, docs, tasks &amp; projects, all in one place.</p>
				<input type="submit" value="Create Workspace" className="btn btn-primary" />
			</form>
		</div>
	)
}

export default Plan