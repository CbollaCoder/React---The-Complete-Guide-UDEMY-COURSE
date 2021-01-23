// Creating my first component

//prop.children includes everything between the opening and closing tag of our component.
// We can pass an html structure and not only external arguments.
//

import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}> My name is {props.name} and I'm {props.age}! </p>
			<p> {props.children} </p> 
		</div>
	)
	
}

export default person;