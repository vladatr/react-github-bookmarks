export default function bookmarksReducer(state={
        groups: [],
        addedRepos: [],
        reposByGroups: [],
        activeGroup: undefined, 
        err: ""
    }, 
    action) {
        let newState = Object.assign({}, state)
        let  groups = []
        let addedRepos = []
        let reposByGroups = []
    switch(action.type) {
    
        case 'ADD_REPO_TO_GROUP':  
        debugger;
            if(typeof state.activeGroup !== 'undefined') {
                addedRepos = [...state.addedRepos, action.repo]
                reposByGroups = [...state.reposByGroups, { group: action.group, repo: action.repo }]
                newState.addedRepos = addedRepos
                newState.reposByGroups = reposByGroups
                newState.err= ""
            } else {
                newState.err = "There is no active bookmark group"
            }
        return newState

        case 'REMOVE_REPO':
            addedRepos = state.addedRepos.filter(repo => repo.id != action.repo.id)
            reposByGroups = state.reposByGroups.filter(group => group.repo.id != action.repo.id)
            newState.addedRepos = addedRepos
            newState.reposByGroups = reposByGroups
        return newState

         case 'ADD_GROUP':
            debugger
            groups = [...state.groups, action.group]
            newState.groups = groups
            newState.activeGroup = action.group
            newState.err = ""
        return newState

        case 'REMOVE_GROUP':
            debugger
          
            groups = state.groups.filter( group => group != action.group)
            newState.groups = groups
            if(groups.length>0) {
                newState.activeGroup = groups[0]
            } else {
                newState.activeGroup = undefined
            }
            //get ids of repos in group

            reposByGroups = state.reposByGroups.filter(group => group.group != action.group)
            addedRepos = [...state.addedRepos]

            state.reposByGroups.map(group => {
                if(group.group == action.group) {
                    addedRepos = addedRepos.filter(repo => repo.id != group.repo.id)
                }
            })

            newState.addedRepos = addedRepos
            newState.reposByGroups = reposByGroups
            
            newState.err = ""
        return newState

        case 'SET_ACTIVE_GROUP':
            newState.activeGroup = action.group
        return newState
            
        case 'SET_ERROR':
            newState.err = action.err
        return newState;
            default:
            return state
    }

}