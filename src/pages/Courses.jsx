import React from 'react';
import StudentCardComponent from "../components/StudentCardComponent";
import CourseCardComponent from "../components/CourseCardComponent";

const Courses = ({courses}) => {
    // console.log("Courses", courses)

    return (
        <>
            {Object.keys(courses).map(course => (
                    <CourseCardComponent key={course} course={courses[course]}/>
                )
            )}
        </>
    )
}

export default Courses;