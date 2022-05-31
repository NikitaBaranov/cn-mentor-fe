import React from 'react';
import CourseCardComponent from "../components/CourseCardComponent";
import CourseAddComponent from "../components/CourseAddComponent";

const Courses = ({courses, getAllCourses}) => {
    return (
        <>
            {Object.keys(courses).map(course => (
                    <CourseCardComponent
                        key={course}
                        course={courses[course]}/>
                )
            )}
            <CourseAddComponent getAllCourses={getAllCourses}/>
        </>
    )
}

export default Courses;