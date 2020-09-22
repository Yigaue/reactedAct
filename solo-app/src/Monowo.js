import React, {Component} from 'react';

class Monowo extends Component {
    render() {
   const {name, age, colour} = this.props;
        return (
            <div className="monowo">
                <div>Name: name</div>
                <div>Age: {age}</div>
                <div>Colour: {colour}</div>
            </div>
        )
    }
}

export default Monowo;