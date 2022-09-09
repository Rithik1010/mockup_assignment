function Plan(props) {

	const handleSubmit = (e) => {
		e.preventDefault();
		props.stage_callback("congratulation");
	}

	return (
		<div>
			<h2 className="text-center">How are you planning to use Eden?</h2>
			<p className="text-center spacing">We'll streamline your setup experienceaccordingly.</p>
			<form onSubmit={handleSubmit} className="container">
				<div className="row">
					<div className="col-md-6 column column1">
						<h6>For myself</h6>
						<p>Write better. Think more clearly. Stay organized</p>
					</div>
					<div className="col-md-6 column">
						<h6>With my team</h6>
						<p>Wikis, docs, tasks &amp; projects, all in one place.</p>
					</div>
				</div>
				<div className="text-center">
					<input type="submit" value="Create Workspace" className="btn btn-primary button" />
				</div>
			</form>
		</div>
	)
}

export default Plan