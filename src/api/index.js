import axios from 'axios'

export function getRepos(searchString) {
    const options = {
        url: "https://api.github.com/search/repositories?q=" + searchString + "&per_page=10",
        method: 'GET'
    }

    return axios(options)
}