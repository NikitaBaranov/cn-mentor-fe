import React from 'react';
import SectionComponent from "./SectionComponent";
import GigHubActivityComponent from "./GitHubActivityComponents";

const ProgressCardComponent = ({student, courses}) => {

    return (<div key={student.id} className={"card border-primary m-2"}>
        <div className="card-header text-primary">
            <a href={`/students?id=${student.id}`}>
                {student.name} ({student.id})
            </a>
        </div>

        {student.gitHubUser && (<div className="card-subtitle m-2">
            <GigHubActivityComponent gitHubUserId={student.gitHubUser.id} daysToShow={60}/>
        </div>)}
        <div className="container">
            {student.coursesProgress && Object.keys(student.coursesProgress).map(courseProgress => (
                <div className="row" key={student.coursesProgress[courseProgress].courseId}>
                    <div className="col-3">
                        <div className="text-secondary">
                            <a href={`https://platform.codingnomads.co/learn/report/outline/user.php?id=${student.id}&course=${student.coursesProgress[courseProgress].courseId}&mode=outline`}
                               target="_blank" rel="noreferrer">
                                {courses[student.coursesProgress[courseProgress].courseId].name}
                            </a>
                            ({student.coursesProgress[courseProgress].courseId})
                        </div>
                    </div>
                    <div className="col" align={"left"}>
                        {student.coursesProgress[courseProgress].sections && student.coursesProgress[courseProgress].sections.map(section => (
                            <SectionComponent key={section.order} section={section}/>))
                        }
                    </div>
                </div>))}

        </div>
    </div>)
}

export default ProgressCardComponent
