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

export function hideRepos() {
    return function(dispatch) {
        dispatch({type: "TOGGLE_REPOS", show: false});
    }
}

export function showRepos() {
    return function(dispatch) {
        dispatch({type: "TOGGLE_REPOS", show: true});
    }
}

export function addGroup(name) {
    return function(dispatch) {
        dispatch({type: "ADD_GROUP", group: name});
    }
}

export function removeGroup(name) {
    return function(dispatch) {
        dispatch({type: "REMOVE_GROUP", group: name});
    }
}

export function removeRepo(item) {
    return function(dispatch) {
        dispatch({type: "REMOVE_REPO", repo: item});
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

export function setError(err) {
    return function(dispatch) {
        dispatch({type: "SET_ERROR", err});
    } 
}