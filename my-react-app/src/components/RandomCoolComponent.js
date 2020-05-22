import React from 'react';
import SomeNeatNumberList from './SomeNeatNumberList';

const someNeatData = [
    {
        id: 1,
        name: 'one'
    },
    {
        id: 2,
        name: 'two'
    },
    {
        id: 3,
        name: 'three'
    }
];

class RandomCoolComponent extends React.Component {

    someVariable = 0;

    constructor(props) {

        super(props);

        this.state = {
            date: new Date()
        };

        //this.onButtonClick = this.onButtonClick.bind(this);

    }

    tick() {

        /*
        this.setState(function (state, props) {

            return {
                date: new Date()
            };

        });
        */

        this.setState((state, props) => ({
            date: new Date()
        }));

    }

    // https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount() {

        console.log('componentDidMount');

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {

        console.log('componentWillUnmount');

        clearInterval(this.timerID);

    }

    onButtonClick(e, msg) {

        console.log(e);
        console.log('msg:', msg);
        console.log('Time is:', this.state.date);

        this.someVariable++;

        // Send data back up to parent via method defined by this.props
        // https://reactjs.org/docs/lifting-state-up.html
        this.props.onRandomButtonClick(this.state.date, this.someVariable);

    }

    render() {

        // TODO: put JSX into separate file?

        return (
            <div>
                <p>Current time is: {this.state.date.toLocaleTimeString()}</p>
                <p>Some variable within RandomCoolComponent: {this.someVariable} </p>
                <p>Here is props.blah.text: {this.props.blah.text}</p>
                <button type="button"
                    className="btn btn-success"
                    onClick={(e) => this.onButtonClick(e, 'I got clicked')}>
                    What time is it?
                </button>
                {/* Passing children */}
                <SomeNeatNumberList numbers={someNeatData}>
                    <h3>This is some numbers list</h3>
                    <span>fancy list, yo</span>
                </SomeNeatNumberList>
            </div>
        );

    }

}

export default RandomCoolComponent;