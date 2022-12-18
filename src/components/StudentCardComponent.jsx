import React, {useState} from 'react';
import {FaGithub, FaTrashAlt, FaUserEdit} from "react-icons/fa";
import {deleteStudent, editStudent} from "../services/Students";
import {IconContext} from "react-icons";
import GigHubActivityComponent from "./GitHubActivityComponents";
import GitHubRepoCardComponent from "./GitHubRepoCardComponent";

const StudentCardComponent = ({student, getAllStudents}) => {

    const [edit, setEdit] = useState(false)
    const [s, setS] = useState(student)

    return (
        <>
            <div key={s.id} className={"card border-success m-2"}>
                {edit ? (
                        <>
                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                disabled={true}
                                                className="form-control"
                                                type="text"
                                                placeholder="#"
                                                value={s.id}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Name"
                                                value={s.name}
                                                onChange={e => setS({
                                                    ...s,
                                                    name: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="GitHub Name"
                                                value={s.gutHubUserName}
                                                onChange={e => setS({
                                                    ...s,
                                                    gutHubUserName: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Start"
                                                value={s.start ? s.start : ""}
                                                onChange={e => setS({
                                                    ...s,
                                                    start: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="End"
                                                value={s.end ? s.end : ""}
                                                onChange={e => setS({
                                                    ...s,
                                                    end: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-success"
                                            type="button"
                                            id="button-addon2"
                                            onClick={() => {
                                                console.log("Save")
                                                editStudent(s,
                                                    () => {
                                                        getAllStudents()
                                                        setEdit(!edit)
                                                    },
                                                    (error) => {
                                                        console.log(error);
                                                        setEdit(!edit)
                                                    }
                                                )
                                            }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={() => {
                                                console.log("Cancel")
                                                setEdit(!edit)
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="card-header text-success aParent">
                                <a href={`https://platform.codingnomads.co/learn/user/profile.php?id=${s.id}`}
                                   target="_blank"
                                   className={"card-link"} rel="noreferrer">
                                    {s.name} ({s.id})
                                </a>
                                {s.gutHubUserName ? (
                                        <a href={`https://github.com/${s.gutHubUserName}`}
                                           target="_blank"
                                           className={"card-link"} rel="noreferrer">
                                            <FaGithub/>
                                        </a>
                                    )
                                    :
                                    <a href={`#`}
                                       className={"card-link"} rel="noreferrer">
                                        <IconContext.Provider value={{
                                            color: "red"
                                        }}>
                                            <FaGithub/>
                                        </IconContext.Provider>
                                    </a>
                                }
                                <a href="#"
                                   className="card-link link-warning"
                                   onClick={() => setEdit(!edit)}>
                                    <FaUserEdit/>
                                </a>
                                <a href="#"
                                   className="card-link link-danger"
                                   onClick={() => deleteStudent(s.id, getAllStudents, () => console.log("failed"))}>
                                    <FaTrashAlt/>
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="m-2">
                                    <GigHubActivityComponent gitHubUserId={student.gitHubUser.id} daysToShow={70}/>
                                </div>
                                {student.gitHubRepos ?
                                    student.gitHubRepos
                                        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                                        .map(repo => (
                                            <GitHubRepoCardComponent gitHubUserId={student.gitHubUser.id}
                                                                     gitHubRepo={repo}/>
                                        ))
                                    :
                                    <></>
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default StudentCardComponent
