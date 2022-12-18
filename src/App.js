import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import {getStudents, updateStudents} from "./services/Students";
import {getCourses} from "./services/Courses";
import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import Progress from "./pages/Progress";

const App = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateAllStudents = () => {
        setIsLoading(true)
        updateStudents((students) => {
                setStudents(students)
                setIsLoading(false)
            },
            (error) => {
                console.log(error);
                setIsLoading(false)
            })
    }

    const getAllStudents = () => {
        setIsLoading(true)
        getStudents((students) => {
                console.log(students);
                setStudents(students)
                setIsLoading(false)
            },
            (error) => {
                console.log(error);
                setIsLoading(false)
            })
    }

    const getAllCourses = () => {
        setIsLoading(true)
        getCourses((courses) => {
                setCourses(courses)
                setIsLoading(false)
            },
            (error) => {
                console.log(error);
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getAllStudents();
        getAllCourses();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">cnMentor</a>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"*/}
                    {/*        aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}
                    {/*<div className="collapse navbar-collapse" id="navbarColor02">*/}

                    {/*<div className="collapse navbar-collapse">*/}
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-primary">
                                    Progress
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/students" className="nav-link text-success">
                                    Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link text-info">
                                    Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                {isLoading ?
                                    <a className="nav-link text-warning">
                                        Updating ...
                                    </a>
                                    :
                                    <a className="nav-link text-danger"
                                       href="#"
                                       onClick={() => updateAllStudents()}
                                    >Update All</a>
                                }
                            </li>
                        </ul>
                    {/*</div>*/}
                </div>
            </nav>
            <Container className={"mt-3"}>
                <Routes>
                    <Route
                        path="/"
                        element={<Progress students={students} courses={courses} getAllStudents={getAllStudents}/>}
                    />
                    <Route
                        path="/courses"
                        element={<Courses courses={courses} getAllCourses={getAllCourses}/>}
                    />
                    <Route
                        path="/students"
                        element={<Students students={students} courses={courses} getAllStudents={getAllStudents}/>}
                    />
                </Routes>
            </Container>
        </>
    )
};

export default App;
