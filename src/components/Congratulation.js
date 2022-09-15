function Congratulation(props) {
	return (
		<div>
			<div className="center-items">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(235, 235, 235)" class="bi bi-check-lg" viewBox="0 0 16 16">
					<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
				</svg>
			</div>
			<h2 className="text-center">Congratulations, {props.user.display_name}!</h2>
			<p className="text-center spacing2">You have completed onboarding, you can start using the Eden!</p>
			<div className="text-center">
				<input type="submit" value="Launch Eden" className="btn btn-primary button" />
			</div>
		</div>
	)
}

export default Congratulation