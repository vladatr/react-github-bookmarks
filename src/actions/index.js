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