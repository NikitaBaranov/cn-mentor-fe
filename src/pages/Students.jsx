import React, {useState} from 'react';
import StudentCardComponent from "../components/StudentCardComponent";
import StudentComponent from "../components/StudentComponent";

const Students = ({students, courses, getAllStudents}) => {

    return (
        <>
            <StudentComponent getAllStudents={getAllStudents}/>
            {students.length > 0 && students.map(student => (
                    <StudentCardComponent key={student.id} student={student} courses={courses} getAllStudents={getAllStudents}/>
                )
            )}
        </>
    )
}

export default Students;