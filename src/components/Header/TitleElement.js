import React from 'react';
import classes from './TitleElement.module.css';

const TitleElement = props => {
	return <h2 className={classes.title}>{props.children}</h2>
}

export default TitleElement;