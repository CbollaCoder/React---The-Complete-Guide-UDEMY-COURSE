// Creating my first component

import React from 'react';

const person = (props) => {
	return <p> My name is {props.name} and I'm {props.age}! </p>
}

export default person;