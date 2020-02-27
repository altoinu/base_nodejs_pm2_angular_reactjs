import React from 'react';
import {useParams} from "react-router-dom";

class AboutInternalComponent extends React.Component {

	render() {

		return (
			<div>
				<p>This is some really nice About page. We got superduperparam from URL: {this.props.superduperparam}</p>
				<p>Buwahahaha, and another props.someprop: {this.props.someprop}</p>
			</div>
		);

	}

}

function About(props) {

	let {superduperparam} = useParams();

	/* hmm, useParams doesn't work with this
	return class extends React.Component {

		render() {

			return (
				<div>
					<p>This is some really nice About page. We got superduperparam: {superduperparam}</p>
					<p>Buwahahaha</p>
				</div>
			);

		}

	};
	*/

	return (
		<AboutInternalComponent superduperparam={superduperparam} someprop={props.someprop}>
			{/* Passing useParams to internally defined class */}
		</AboutInternalComponent>
	);

}

export default About;