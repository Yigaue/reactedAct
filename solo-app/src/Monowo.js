import React, {Component} from 'react';

class Monowo extends Component {
render() {
   const {students} = this.props;
   const studentList = students.map(student => {
    return (   
        <div className ="monowo" key = {student.id}>
            <div>Name: {student.name}</div>
            <div>Age: {student.age}</div>
            <div>Colour: {student.height}</div>
        </div>
    )
   })
    return (
        <div className="student-list">{studentList}</div>
    )
    }
}

export default Monowo;