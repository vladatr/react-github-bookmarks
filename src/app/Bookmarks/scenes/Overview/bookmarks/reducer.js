export default function bookmarksReducer(state={
        groups: [],
        addedRepos: [],
        reposByGroups: [],
        activeGroup: undefined, 
        err: ""
    }, 
    action) {
        let newState = Object.assign({}, state)
    switch(action.type) {
        case 'ADD_REPO_TO_GROUP':  
            if(typeof state.activeGroup !== 'undefined') {
                const addedRepos = [...state.addedRepos, action.repo]
                const reposByGroups = [...state.reposByGroups, { group: action.group, name: action.repo }]
                newState.addedRepos = addedRepos
                newState.reposByGroups = reposByGroups
            } else {
                newState.err = "There is no active bookmark group"
            }

        return newState

         case 'ADD_GROUP':
            debugger
            const groups = [...state.groups, action.group]
            newState.groups = groups
            newState.activeGroup = action.group
        return newState

        case 'SET_ACTIVE_GROUP':
            newState.activeGroup = action.group
        return newState
            
            default:
            return state
    }

}