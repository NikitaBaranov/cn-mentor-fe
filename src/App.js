import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';


import './App.css';
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import {getStudents, updateStudents} from "./services/Students";
import {getCourses} from "./services/Courses";

const App = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState("Students")

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

    const renderPage = () => {
        switch (page) {
            case "Students":
                return (<Students students={students} courses={courses}/>);
            case "Courses":
                return (<Courses courses={courses}/>);
            default:
                return (<></>)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">cnMentor</a>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"*/}
                    {/*        aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setPage("Students")}>Students
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => setPage("Courses")}>Courses</a>
                            </li>
                            {isLoading ?
                                <li className="nav-item">
                                    <a className="nav-link text-warning" >
                                        Updating ...
                                    </a>
                                </li>
                                :
                                <li className="nav-item">

                                    <a className="nav-link text-danger"
                                       href="#"
                                       onClick={() => updateAllStudents()}
                                    >
                                        Update All</a>
                                </li>
                            }
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="#">Pricing</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="#">About</a>*/}
                            {/*</li>*/}

                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"*/}
                            {/*       aria-haspopup="true" aria-expanded="false">Dropdown</a>*/}
                            {/*    <div className="dropdown-menu">*/}
                            {/*        <a className="dropdown-item" href="#">Action</a>*/}
                            {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                            {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                            {/*        <div className="dropdown-divider"></div>*/}
                            {/*        <a className="dropdown-item" href="#">Separated link</a>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
            <Container>
                {renderPage()}
                {/*<Container className="p-5 mb-4 bg-dark rounded-3">*/}
                {/*<Students students={students} courses={courses}/>*/}
                {/*</Container>*/}
            </Container>
        </>
    )
};

export default App;