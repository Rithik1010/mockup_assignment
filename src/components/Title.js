import React from 'react'
import title_icon from '../images/title-icon.png'

function Title() {
	return (
		<div className='title-card'>
			<img src={title_icon} alt="title_icon" />
			<h2 className="title-name">Eden</h2>
		</div>
	)
}

export default Title