import React from 'react';
import {FaExternalLinkAlt, FaTrashAlt} from "react-icons/fa";
import {deleteCourse} from "../services/Courses";

const CourseCardComponent = ({course, getAllCourses}) => {
    return (
        <>
            <div key={course.id} className={"card border-info m-2"}>
                <div className="card-header text-info">
                    {course.name} ({course.id})
                </div>
                <div className="card-body">
                    <a href={`https://platform.codingnomads.co/learn/course/view.php?id=${course.id}`}
                       target="_blank"><FaExternalLinkAlt/></a>
                    <a href="#"
                       className="card-link link-danger"
                       onClick={() => deleteCourse(course.id, getAllCourses, () => console.log("failed"))}>
                        <FaTrashAlt/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CourseCardComponent