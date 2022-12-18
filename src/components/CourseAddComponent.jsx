import React, {useState} from 'react';
import {addCourse} from "../services/Courses";

const CourseAddComponent = ({getAllCourses}) => {
    const [add, setAdd] = useState(false)
    const [courseId, setCourseId] = useState("")
    const [courseName, setCourseName] = useState("")

    return (
        <div className={"card border-info m-2"}>
            <div className="card-header text-info text-center"
                 onClick={() => setAdd(!add)}>
                Add
            </div>
            {add &&
                <div className="card-body">
                    <div className="form-group form-group row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="#"
                                    value={courseId}
                                    onChange={e => setCourseId(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="Name"
                                    value={courseName}
                                    onChange={e => setCourseName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-info m-1"
                                type="button"
                                id="button-addon2"
                                onClick={() => addCourse(
                                    courseId,
                                    courseName,
                                    getAllCourses,
                                    () => console.log("failed"))}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CourseAddComponent
