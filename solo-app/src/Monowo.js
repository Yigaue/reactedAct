import React, {Component} from 'react';

class Monowo extends Component {
    render() {
    console.log(this.props);
        return (
            <div className="monowo">
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Colour: {this.props.colour}</div>
            </div>
        )
    }
}

export default Monowo;