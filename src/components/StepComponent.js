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
				styleConfig={{activeBgColor: "#734DD3", completedBgColor:"#734DD3", inactiveTextColor:"#000000", inactiveBgColor:"#DCDCDC"}} 
				connectorStyleConfig={{stepSize: "1.7em", completedColor:"#734DD3", activeColor: "#DCDCDC", size: "0.1em"}}
			/>
		</div>
	);
}

export default StepComponent