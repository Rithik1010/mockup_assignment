function Congratulation(props) {
	return (
		<div>
			<h2 className="text-center">Congratulations, {props.user.display_name}!</h2>
			<p className="text-center spacing">You have completed onboarding, you can start using the Eden!</p>
			<div className="text-center">
				<input type="submit" value="Launch Eden" className="btn btn-primary button" />
			</div>
		</div>
	)
}

export default Congratulation