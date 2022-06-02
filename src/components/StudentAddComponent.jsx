import React, {useState} from 'react';
import {addStudent} from "../services/Students";

const StudentAddComponent = ({getAllStudents}) => {
    const [add, setAdd] = useState(false)
    const [studentId, setStudentId] = useState("")
    const [studentName, setStudentName] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    return (
        <div className={"card border-success m-2"}>
            <div className="card-header text-success text-center"
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
                                    value={studentId}
                                    onChange={e => setStudentId(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="Name"
                                    value={studentName}
                                    onChange={e => setStudentName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="Start"
                                    value={start}
                                    onChange={e => setStart(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <input
                                    className="form-control m-1"
                                    type="text"
                                    placeholder="End"
                                    value={end}
                                    onChange={e => setEnd(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-success m-1"
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
            }
        </div>
    )
}

export default StudentAddComponent