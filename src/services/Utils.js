export const backendUrl = () => {
    if (process.env.REACT_APP_CN_BE_URL){
        return process.env.REACT_APP_CN_BE_URL
    }

    return "http://localhost:8080"
}
