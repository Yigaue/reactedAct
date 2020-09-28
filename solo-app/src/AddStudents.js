import React, {Component} from 'react';

class AddStudents extends Component {
    state = {
        name: null,
        age: null,
        height: null
    }
    handleChange = (e) => {

       this.setState({
           [e.target.id]: e.target.value,
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addStudent(this.state);
    }
    render() {
        return (
            <div className="student-details">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="name" onChange={this.handleChange}> Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor="height"> Height:</label>
                    <input type="text" id="height" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddStudents;