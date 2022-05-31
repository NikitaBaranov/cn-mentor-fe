import React from 'react';
import {FaExternalLinkAlt} from "react-icons/fa";

const CourseCardComponent = ({course}) => {
    return (
        <>
            <div key={course.id} className={"card border-info m-2"}>
                <div className="card-header text-info">
                    {course.name} ({course.id})
                </div>
                <div className="card-body">
                    <a href={`https://platform.codingnomads.co/learn/course/view.php?id=${course.id}`}
                       target="_blank"><FaExternalLinkAlt/></a>
                </div>
            </div>
        </>
    )
}

export default CourseCardComponent