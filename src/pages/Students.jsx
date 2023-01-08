import React, {useEffect, useState} from 'react';
import StudentAddComponent from "../components/StudentAddComponent";
import StudentCardComponent from "../components/StudentCardComponent";

const Students = ({students, getAllStudents}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const searchParams = new URLSearchParams((new URL(document.location)).searchParams);
        const elem = document.getElementById(searchParams.get("id"));
        if (loading && elem) {
            elem.scrollIntoView({block: "start"});
        }
    }, [students])

    return (<>
        {students.length > 0 && students.map(student => (
            <StudentCardComponent
                key={student.id}
                student={student}
                getAllStudents={getAllStudents}/>))}
        <StudentAddComponent getAllStudents={getAllStudents}/>
    </>)
}

export default Students;