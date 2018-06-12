import * as api from '../api' 


export function getRepos(searchString) {
    return function(dispatch){
        console.log("action getRepos");
        api.getRepos(searchString)
        .then( (result) => {
            dispatch({type: "RESULTS_FETCHED", payload: result.data.items});
        })
        .catch( (err) => console.log("ERR actions ", err))
                
            
    }
}

export function emptyRepos() {
    return function(dispatch) {
        dispatch({type: "EMPTY_REPOS"});
    }
}

export function addGroup(name) {
    return function(dispatch) {
        dispatch({type: "ADD_GROUP", group: name});
    }
}

export function setActiveGroup(name) {
    return function(dispatch) {
        dispatch({type: "SET_ACTIVE_GROUP", group: name});
    }
}

export function addRepoToGroup(name, repo) {
    return function(dispatch) {
        dispatch({type: "ADD_REPO_TO_GROUP", group: name, repo});
    }
}