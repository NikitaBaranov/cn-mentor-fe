import React from 'react';
import GigHubActivityComponent from "./GitHubActivityComponents";

const GitHubRepoCardComponent = ({gitHubUserId, gitHubRepo}) => {

    return (
        <table className="table table-hover">
            <tbody>
            <tr>
                <td>
                    <a href={gitHubRepo.html_url}
                       key={gitHubRepo.id}
                       target="_blank"
                       className={"card-link"} rel="noreferrer">
                        {gitHubRepo.name}
                    </a>
                </td>
                <td className="text-start">
                    <GigHubActivityComponent gitHubUserId={gitHubUserId} gitHubRepoId={gitHubRepo.id} daysToShow={14}/>
                </td>
            </tr>

            </tbody>
        </table>
    )
}

export default GitHubRepoCardComponent
