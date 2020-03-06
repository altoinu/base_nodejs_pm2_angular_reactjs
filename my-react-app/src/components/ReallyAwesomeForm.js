import React from 'react';

class ReallyAwesomeForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            textValue: ''
        };

        // ref
        // https://reactjs.org/docs/refs-and-the-dom.html
        this.textInput = React.createRef();

    }

    componentDidMount() {

        console.log('focusing...this.textInput.current', this.textInput.current);
        this.textInput.current.focus();

    }

    onFormSubmit(e) {

        console.log(e);
        console.log(e.target);

        alert('Text entered was: ' + this.state.textValue);
        e.preventDefault();

    }

    onInputTextChange(e) {

        console.log(e);
        console.log(e.target);

        this.setState({
            textValue: e.target.value
        });

    }

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>
                        Enter some text here:
                        <input type="text"
                            ref={this.textInput}
                            value={this.state.textValue}
                            onChange={(e) => this.onInputTextChange(e)} />
                    </label>
                    <input type="submit"
                        value="Submit" />
                </form>
                <p>This is what's in the input text: {this.state.textValue}</p>
            </div>
        );

    }

}

export default ReallyAwesomeForm;