export const getCourses = (onSuccess, onError) => {
    console.log("getStudents", "start");
    fetch("http://localhost:8080/courses")
        .then((res) => res.json())
        .then((courses) => {
            const coursesMap = {}
            courses.forEach(course => coursesMap[course.id] = course)
            console.log("getAllStudents", "end");
            onSuccess(coursesMap)
        })
        .catch(e => {
            onError(e)
        })
}