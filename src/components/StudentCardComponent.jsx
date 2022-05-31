import React from 'react';
import {FaGithub, FaTrashAlt} from "react-icons/fa";
import {deleteStudent} from "../services/Students";

const StudentCardComponent = ({student, getAllStudents}) => {
    return (
        <>
            <div key={student.id} className={"card border-success m-2"}>
                <div className="card-header text-success">
                    {student.name} ({student.id})
                </div>
                <div className="card-body">
                    <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${student.id}`}
                       target="_blank"
                       className={"card-link"}>
                        Profile
                    </a>
                    <a href="#" className="card-link "><FaGithub/></a>
                    <a href="#" className="card-link">GoogleDoc</a>
                    <a href="#"
                       className="card-link link-danger"
                       onClick={() => deleteStudent(student.id, getAllStudents, () => console.log("failed"))}>
                        <FaTrashAlt/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default StudentCardComponent