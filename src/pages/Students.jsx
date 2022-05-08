import React from 'react';
import StudentCardComponent from "../components/StudentCardComponent";

const Students = ({students, courses}) => {
    console.log(students)
    console.log(courses)

    return (
        <>
            {students.length > 0 && students.map(student => (
                    <StudentCardComponent key={student.id} student={student} courses={courses}/>
                )
            )}
        </>
    )
}

export default Students;