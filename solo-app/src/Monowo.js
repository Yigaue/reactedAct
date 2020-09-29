import React from 'react';

const Monowo = ({students, deleteStudent}) => {

//    const studentList = students.map(student => {
//     if(student.age > 23) {
//         return (   
//             <div className ="monowo" key = {student.id}>
//                 <div>Name: {student.name}</div>
//                 <div>Age: {student.age}</div>
//                 <div>Colour: {student.height}</div>
//             </div>
//         )
//     } 
//     return student.age = <div key = {student.id}>Age: Too Old</div>;
//    })
//     const studentList =  students.map(student => {
//         return student.age > 23 ? (
//         <div className ="monowo" key = {student.id}>
//             <div>Name: {student.name}</div>
//             <div>Age: {student.age}</div>
//             <div>Colour: {student.height}</div>
//         </div>
//         ) : null
//     })
//     return (
//         <div className="student-list">{studentList}</div>
//     )
// }


    return (
        <div className="student-list">
        {
           students.map(student => {
            return student.age > 23 ? (
                <div className ="monowo" key = {student.id}>
                    <div>Name: {student.name}</div>
                    <div>Age: {student.age}</div>
                    <div>Colour: {student.height}</div>
                    <button onClick={ () => {deleteStudent(student.id)}}>Delete</button>
                </div>
                ) : null
            })
        }
        </div>
    )
}

export default Monowo;