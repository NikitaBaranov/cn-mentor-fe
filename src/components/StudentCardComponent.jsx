import React from 'react';
import {FaGithub, FaTrashAlt} from 'react-icons/fa';
import SectionComponent from "./SectionComponent";
import {deleteStudent} from "../services/Students";

const StudentCardComponent = ({student, courses, getAllStudents}) => {

    // console.log(student)

    return (
        <>
            <div key={student.id} className={"card border-primary"}>
                <div className="card-header">
                <span className="text-primary">
                    <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${student.id}`}
                       target="_blank">
                        {student.name} ({student.id})
                    </a> <button type="button"
                                 className="btn btn-outline-danger btn-sm"
                                 onClick={() => deleteStudent(student.id, getAllStudents, () => console.log("failed"))}>
                            <FaTrashAlt/>
                         </button> | <FaGithub/> | <a>GoogleDoc</a>
                </span>
                </div>

                <table className="table table-hover">
                    <tbody>
                    {student.coursesProgress && Object.keys(student.coursesProgress).map(courseProgress => (
                        <tr key={student.coursesProgress[courseProgress].courseId} className="table-active">
                            <td>
                                <div className="text-secondary">
                                    <a href={`https://platform.codingnomads.co/learn/report/outline/user.php?id=${student.id}&course=${student.coursesProgress[courseProgress].courseId}&mode=outline`}
                                       target="_blank">
                                        {courses[student.coursesProgress[courseProgress].courseId].name}
                                    </a>
                                    ({student.coursesProgress[courseProgress].courseId})
                                </div>
                            </td>
                            <td>
                                {student.coursesProgress[courseProgress].sections && student.coursesProgress[courseProgress].sections.map(section => (
                                    <SectionComponent key={section.id} section={section}/>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <br/>
        </>
    )
}

export default StudentCardComponent