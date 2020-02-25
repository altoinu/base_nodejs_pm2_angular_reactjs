import React from 'react';
import SomeNeatNumberList from './SomeNeatNumberList';

var someVariable = 0;

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

    constructor(props) {

        super(props);

        this.state = {
            date: new Date()
        };

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

    componentDidMount() {

        // https://reactjs.org/docs/state-and-lifecycle.html
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {

        clearInterval(this.timerID);

    }

    onButtonClick(e, msg) {

        console.log(msg);
        console.log('Time is:', this.state.date);

        someVariable++;

        // https://reactjs.org/docs/lifting-state-up.html
        this.props.onRandomButtonClick(this.state.date, someVariable);

    }

    render() {

        var props = this.props;

        return (
            <div>
                <p>Current time is: {this.state.date.toLocaleTimeString()}</p>
                <p>Some variable within RandomCoolComponent: {someVariable} </p>
                <p>Here is props.blah.text: {props.blah.text}</p>
                <button onClick={(e) => this.onButtonClick.call(this, e, 'I got clicked')}>What time is it?</button>
                <SomeNeatNumberList numbers={someNeatData}>
                    <h3>This is some numbers list</h3>
                    <span>fancy list, yo</span>
                </SomeNeatNumberList>
            </div>
        );

    }

}

export default RandomCoolComponent;