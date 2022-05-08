export const updateStudents = (onSuccess, onError) => {
    console.log("updateAll", "start");
    fetch("http://localhost:8080/students/update")
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
    fetch("http://localhost:8080/students")
        .then((res) => res.json())
        .then((students) => {
            console.log("getAllStudents", "end");
            onSuccess(students)
        })
        .catch(e => {
            onError(e)
        })
}