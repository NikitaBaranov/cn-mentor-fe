export const getGitHubUser = (user, onSuccess, onError) => {
    console.log("getGitHubUser", "start");
    fetch(`http://localhost:8080/gh/${user}`)
        .then((res) => res.json())
        .then((gitHubUser) => {
            console.log("getGitHubUser", "done")
            onSuccess(gitHubUser)
        })
        .catch(e => {
            onError(e)
        })
}

export const getGitHubRepos = (user, onSuccess, onError) => {
    console.log("getGitHubRepos", "start");
    fetch(`http://localhost:8080/gh/${user}/repos`)
        .then((res) => res.json())
        .then((gitHubRepos) => {
            console.log("getGitHubRepos", "done")
            onSuccess(gitHubRepos)
        })
        .catch(e => {
            onError(e)
        })
}

export const getGitHubEvents = (gitHubUserId, onSuccess, onError) => {
    console.log("getGitHubEvents", "start");
    fetch(`http://localhost:8080/gh/${gitHubUserId}/events`)
        .then((res) => res.json())
        .then((gitHubRepos) => {
            console.log("getGitHubEvents", "done")
            onSuccess(gitHubRepos)
        })
        .catch(e => {
            onError(e)
        })
}

export const getGitHubRepoEvents = (gitHubUserId, gitHubRepoId, onSuccess, onError) => {
    console.log("getGitHubEvents", "start");
    fetch(`http://localhost:8080/gh/${gitHubUserId}/repo/${gitHubRepoId}/events`)
        .then((res) => res.json())
        .then((gitHubRepos) => {
            console.log("getGitHubEvents", "done")
            onSuccess(gitHubRepos)
        })
        .catch(e => {
            onError(e)
        })
}
