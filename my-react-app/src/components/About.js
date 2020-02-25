import React from 'react';
import {useParams} from "react-router-dom";

function About(props) {

	let {superduperparam} = useParams();

	return (
		<p>This is some really nice About page. We got superduperparam: {superduperparam}</p>
	);

}

export default About;