import React from 'react';
import {FaGithub} from 'react-icons/fa';
import SectionComponent from "./SectionComponent";

const StudentCardComponent = ({student, courses}) => {

    // console.log(student)

    return (
        <>
            <div key={student.id} className={"card border-primary"}>
                <div className="card-header">
                <span className="text-primary">
                    <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${student.id}`}
                       target="_blank">
                        {student.name} ({student.id})
                    </a> | <FaGithub/> | <a>GoogleDoc</a>
                </span>
                </div>

                <table className="table table-hover">
                    <tbody>
                    {Object.keys(student.coursesProgress).map(courseProgress => (
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
                                {student.coursesProgress[courseProgress].sections.map(section => (
                                    <SectionComponent section={section}/>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/*{Object.keys(student.coursesProgress).map(courseProgress => (*/}
                {/*    <div key={student.coursesProgress[courseProgress].courseId}>*/}
                {/*        <div className="text-secondary">*/}
                {/*            <a href={`https://platform.codingnomads.co/learn/report/outline/user.php?id=${student.id}&course=${student.coursesProgress[courseProgress].courseId}&mode=outline`}*/}
                {/*               target="_blank">*/}
                {/*                {courses[student.coursesProgress[courseProgress].courseId].name}*/}
                {/*            </a>*/}
                {/*            ({student.coursesProgress[courseProgress].courseId})*/}
                {/*        </div>*/}
                {/*        <div>{student.coursesProgress[courseProgress].sections.map(section => (*/}
                {/*            <SectionComponent section={section}/>*/}
                {/*        ))}*/}
                {/*        </div>*/}
                {/*        <br/>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
            <br/>
        </>
    )
}

export default StudentCardComponent