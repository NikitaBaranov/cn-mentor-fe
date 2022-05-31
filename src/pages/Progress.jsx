import React from 'react';
import ProgressCardComponent from "../components/ProgressCardComponent";

const Progress = ({students, courses, getAllStudents}) => {

    return (
        <>
            {students.length > 0 && students.map(student => (
                    <ProgressCardComponent
                        key={student.id}
                        student={student}
                        courses={courses}
                        getAllStudents={getAllStudents}/>
                )
            )}
        </>
    )
}

export default Progress;