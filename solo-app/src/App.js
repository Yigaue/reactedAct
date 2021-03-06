import React, {Component} from 'react';
import './App.css';
import Monowo from './Monowo';
import AddStudents from './AddStudents';

class App extends Component {
  state = {
    students: [
      {id: 1, name: 'Eseosa', age: 30, height: '4 ft'},
      {id: 2, name: 'Akpan', age: 24, height: '3.8 ft'},
      {id: 3, name: 'Samuel', age: 19, height: '5.1 ft'}
    ]
  }
  addStudent = (student) => {
    student.id  = Math.random() *10;
    let students = [...this.state.students, student];
    this.setState({students: students})
  }
  deleteStudent = (id) => {
    let students = this.state.students.filter( student => {
      return student.id !== id;
    });

    this.setState({
      students: students
    })
  }
    render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Monowo students ={this.state.students} deleteStudent = {this.deleteStudent} />
        <AddStudents addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;
