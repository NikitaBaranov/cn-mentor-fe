import {backendUrl} from "./Utils";

export const updateStudents = (onSuccess, onError) => {
    console.log("updateAll", "start");
    fetch(`${backendUrl()}/students/update`)
        .then((res) => res.json())
        .then((students) => {
            console.log("updateAll", "done")
            onSuccess(students)
        })
        .catch(e => {
            onError(e)
        })
}

export const getStudents = (onSuccess, onError) => {
    console.log("getAllStudents", "start");
    fetch(`${backendUrl()}/students`)
        .then((res) => res.json())
        .then((students) => {
            console.log("getAllStudents", "end");
            onSuccess(students)
        })
        .catch(e => {
            onError(e)
        })
}

export const getStudentGithubEvents = (studentId, onSuccess, onError) => {
    console.log("getStudentGithubEvents", "start");
    fetch(`${backendUrl()}/students/${studentId}/gitHubEvents`)
        .then((res) => res.json())
        .then((events) => {
            console.log("getStudentGithubEvents", "end");
            onSuccess(events)
        })
        .catch(e => {
            onError(e)
        })
}

export const addStudent = (student, onSuccess, onError) => {
    console.log(student)
    console.log("addStudent", "start");
    fetch(`${backendUrl()}/students`,
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
            body: JSON.stringify(student) // body data type must match "Content-Type" header
        })
        .then((res) => res.json())
        .then((students) => {
            console.log("addStudent", "end");
            onSuccess(students)
        })
        .catch(e => {
            onError(e)
        })
}

export const editStudent = (student, onSuccess, onError) => {
    console.log("editStudent", "start");
    fetch(`${backendUrl()}/students`,
        {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(student) // body data type must match "Content-Type" header
        })
        .then((res) => res.json())
        .then((student) => {
            console.log("editStudent", "end");
            onSuccess(student)
        })
        .catch(e => {
            onError(e)
        })
}

export const deleteStudent = (studentId, onSuccess, onError) => {
    console.log("deleteStudent", "start");
    fetch(`${backendUrl()}/students/${studentId}`,
        {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            console.log("deleteStudent", "end");
            onSuccess()
        })
        .catch(e => {
            onError(e)
        })
}
