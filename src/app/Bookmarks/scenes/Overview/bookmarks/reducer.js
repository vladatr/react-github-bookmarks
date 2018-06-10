export default function bookmarksReducer(state={
        groups: [],
        addedRepos: [],
        reposByGroups: []
    }, 
    action) {
        let newState = Object.assign({}, state)
    switch(action.type) {
        case 'ADD_REPO_TO_GROUP':  
            const addedRepos = [...state.addedRepos, action.repo]
            const reposByGroups = [...state.reposByGroups, { group: action.group, name: action.repo }]
            newState.addedRepos = addedRepos
            newState.reposByGroups = reposByGroups
        return newState

         case 'ADD_GROUP':
            debugger
            const groups = [...state.groups, action.group]
            newState.groups = groups
        return newState
            
            default:
            return state
    }

}