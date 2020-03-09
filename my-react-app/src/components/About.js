import React from 'react';
import {
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";

class AboutInternalComponent extends React.Component {

    componentDidMount() {

        console.log('About componentDidMount');

    }

    componentWillUnmount() {

        console.log('About componentWillUnmount');

    }

    render() {

        return (
            <div>
                <p>This is some really nice About page.<br />
                    We got param from URL /about/:superduperparam - {this.props.superduperparam}</p>
                <p>Buwahahaha, and another normally passed<br />this.props.someprop: {this.props.someprop}</p>
            </div>
        );

    }

}

function About(props) {

    let history = useHistory();
    let location = useLocation();

    let params = useParams();
    //let superduperparam = params.superduperparam;
    let {superduperparam} = useParams();

    console.log('history in About', history);
    console.log('location in About', location);
    console.log('params in About', params);

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