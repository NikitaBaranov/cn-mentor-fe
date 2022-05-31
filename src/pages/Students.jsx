import React from 'react';
import StudentAddComponent from "../components/StudentAddComponent";
import StudentCardComponent from "../components/StudentCardComponent";

const Students = ({students, getAllStudents}) => {

    return (
        <>
            {students.length > 0 && students.map(student => (
                    <StudentCardComponent
                        key={student.id}
                        student={student}
                        getAllStudents={getAllStudents}/>
                )
            )}
            <StudentAddComponent getAllStudents={getAllStudents}/>
        </>
    )
}

export default Students;