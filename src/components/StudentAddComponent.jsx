import React, {useState} from 'react';
import {addStudent} from "../services/Students";

const StudentAddComponent = ({getAllStudents}) => {
    const [edit, setEdit] = useState(false)
    const [s, setS] = useState({})

    return (
        <div className={"card border-success m-2"}>
            <div className="card-header text-success text-center"
                 onClick={() => setEdit(!edit)}>
                Add
            </div>
            {edit &&
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="#"
                                    value={s.id}
                                    onChange={e => setS({
                                        ...s,
                                        id: e.target.value
                                    })}
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
                        {/*<div className="col">*/}
                        {/*    <div className="input-group">*/}
                        {/*        <input*/}
                        {/*            className="form-control"*/}
                        {/*            type="text"*/}
                        {/*            placeholder="Start"*/}
                        {/*            value={s.start ? s.start : ""}*/}
                        {/*            onChange={e => setS({*/}
                        {/*                ...s,*/}
                        {/*                start: e.target.value*/}
                        {/*            })}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <div className="input-group">*/}
                        {/*        <input*/}
                        {/*            className="form-control"*/}
                        {/*            type="text"*/}
                        {/*            placeholder="End"*/}
                        {/*            value={s.end ? s.end : ""}*/}
                        {/*            onChange={e => setS({*/}
                        {/*                ...s,*/}
                        {/*                end: e.target.value*/}
                        {/*            })}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col">
                            <button
                                className="btn btn-success"
                                type="button"
                                id="button-addon2"
                                onClick={() => {
                                    console.log("Save")
                                    addStudent(
                                        s,
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
                                    setS({})
                                    setEdit(!edit)
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default StudentAddComponent