import React from 'react';

const CourseInfo = (course) => {
    console.log(course)

    return (
        <>
            <h1>{course.id}</h1>
            <h1>Sections {course.sections.length}</h1>
        </>
    )

}

export default CourseInfo