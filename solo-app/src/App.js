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
    this.state.students.push(student);
  }
    render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Monowo students ={this.state.students} />
        <AddStudents addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;
