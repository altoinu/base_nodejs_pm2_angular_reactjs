import React from 'react';

function ListItem(props) {

	return <li>{props.value}</li>;

}

class SomeNeatNumberList extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		var props = this.props;

		var listItems = props.numbers.map((item) => (
			<ListItem key={item.id.toString()} value={item.name} />
		));

		return (
			<div>
				{props.children}
				<ul>
					{listItems}
				</ul >
			</div>
		);

	}

}

export default SomeNeatNumberList;