import React from 'react';
import classes from './Button.module.css';

const Button = props => {

	const classesList = `${classes.btn} ${props.className}`;

	return (
		<button
			className={classesList}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
