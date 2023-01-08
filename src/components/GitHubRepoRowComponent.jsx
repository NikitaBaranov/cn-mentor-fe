import React from 'react';
import GigHubActivityComponent from "./GitHubActivityComponents";

const GitHubRepoRowComponent = ({gitHubUserId, gitHubRepo}) => {

    return (
        <div className="row">
            <div className="col-3">
                <a href={gitHubRepo.html_url}
                   key={gitHubRepo.id}
                   target="_blank"
                   className={"card-link"} rel="noreferrer">
                    {gitHubRepo.name}
                </a>
            </div>
            <div className="col">
                <GigHubActivityComponent gitHubUserId={gitHubUserId} gitHubRepoId={gitHubRepo.id} daysToShow={14}/>
            </div>
        </div>
    )
}

export default GitHubRepoRowComponent
