import React from 'react';
import SectionComponent from "./SectionComponent";

const ProgressCardComponent = ({student, courses}) => {
    // console.log(student)

    return (
        <div key={student.id} className={"card border-primary m-2"}>
            <div className="card-header text-primary">
                <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${student.id}`}
                   target="_blank">
                    {student.name} ({student.id})
                </a>
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
                        <td className={"text-start"}>
                            {student.coursesProgress[courseProgress].sections && student.coursesProgress[courseProgress].sections.map(section => (
                                <SectionComponent key={section.order} section={section}/>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProgressCardComponent