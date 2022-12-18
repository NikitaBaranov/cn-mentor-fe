import {backendUrl} from "./Utils";

export const getCourses = (onSuccess, onError) => {
    console.log("getcourses", "start");
    fetch(`${backendUrl()}/courses`)
        .then((res) => res.json())
        .then((courses) => {
            const coursesMap = {}
            courses.forEach(course => coursesMap[course.id] = course)
            console.log("getAllcourses", "end");
            onSuccess(coursesMap)
        })
        .catch(e => {
            onError(e)
        })
}

export const addCourse = (courseId, courseName, onSuccess, onError) => {
    console.log("addCourse", "start");
    fetch(`${backendUrl()}/courses`,
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify([
                {
                    "id": courseId,
                    "name": courseName
                }
            ]) // body data type must match "Content-Type" header
        })
        .then((res) => res.json())
        .then((courses) => {
            console.log("addCourse", "end");
            onSuccess(courses)
        })
        .catch(e => {
            onError(e)
        })
}

export const deleteCourse = (courseId, onSuccess, onError) => {
    console.log("deleteCourse", "start");
    fetch(`${backendUrl()}/courses/${courseId}`,
        {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            console.log("deleteCourse", "end");
            onSuccess()
        })
        .catch(e => {
            onError(e)
        })
}
