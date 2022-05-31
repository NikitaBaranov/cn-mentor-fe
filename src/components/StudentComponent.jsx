import React, {useState} from 'react';
import {addStudent} from "../services/Students";

const StudentComponent = ({getAllStudents}) => {
    const [add, setAdd] = useState(false)
    const [studentId, setStudentId] = useState("")
    const [studentName, setStudentName] = useState("")

    return (
        <>
            <a className="text-info"
               href="#"
               onClick={() => setAdd(!add)}
            >Add Student</a>

            {add &&
                <>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Student id</label>
                        <div className="col-sm-10">
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="#"
                                    value={studentId}
                                    onChange={e => setStudentId(e.target.value)}
                                />
                                <div style={{"width": "3px"}}>

                                </div>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Student Name"
                                    value={studentName}
                                    onChange={e => setStudentName(e.target.value)}
                                />
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    id="button-addon2"
                                    onClick={() => addStudent(
                                        studentId,
                                        studentName,
                                        getAllStudents,
                                        () => console.log("failed"))}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default StudentComponent