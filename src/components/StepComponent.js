import { Stepper } from 'react-form-stepper';

function StepComponent(props) {
	const obj = {
		welcome: 0,
		setUpHome: 1,
		plan: 2,
		congratulation: 3
	}

	return (
		<div className="step-container">
			<Stepper
				steps={[{}, {}, {}, {}]}
				activeStep={obj[props.stage]}
				styleConfig={{activeBgColor: "#644ce4", completedBgColor:"#644ce4", inactiveTextColor:"#000000", inactiveBgColor:"#ffffff", circleFontSize: "0.8rem", size:"2.1rem"}} 
				connectorStyleConfig={{stepSize: "1.7em", activeColor:"#644ce4", disabledColor:"#e0e0e0"}}
			/>
		</div>
	);
}

export default StepComponent