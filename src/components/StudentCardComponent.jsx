import React, {useState} from 'react';
import {FaGithub, FaTrashAlt, FaUserEdit} from "react-icons/fa";
import {deleteStudent} from "../services/Students";

const StudentCardComponent = ({student, getAllStudents}) => {
    const [edit, setEdit] = useState(false)
    const [studentId, setStudentId] = useState(student.id)
    const [studentName, setStudentName] = useState(student.name)
    const [start, setStart] = useState(student.start)
    const [end, setEnd] = useState(student.end)

    return (
        <>
            <div key={student.id} className={"card border-success m-2"}>
                {edit ? (
                        <>
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
                                                onChange={e => setStudentId(e.target.value)}
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
                                                onChange={e => setStudentName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-success m-1"
                                            type="button"
                                            id="button-addon2"
                                            onClick={() => console.log("Save")}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    :
                    (<>
                            <div className="card-header text-success">
                                {student.name} ({student.id})
                            </div>
                            <div className="card-body">
                                <div className="progress">
                                    <div className="progress-bar bg-success w-75"
                                         role="progressbar"
                                         aria-valuenow="100"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                                <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${student.id}`}
                                   target="_blank"
                                   className={"card-link"}>
                                    Profile
                                </a>
                                <a href="#" className="card-link "><FaGithub/></a>
                                <a href="#" className="card-link">GoogleDoc</a>

                                <a href="#"
                                   className="card-link link-warning"
                                   onClick={() => setEdit(!edit)}>
                                    <FaUserEdit/>
                                </a>
                                <a href="#"
                                   className="card-link link-danger"
                                   onClick={() => deleteStudent(student.id, getAllStudents, () => console.log("failed"))}>
                                    <FaTrashAlt/>
                                </a>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default StudentCardComponent