export default function searchReducer(state=[], action) {
    switch(action.type) {
        case 'RESULTS_FETCHED':
        console.log("reduces RESULTS_FETCHED")
        debugger
         return action.payload //always new

         case 'EMPTY_REPOS':
            return [];
           
        default:
            return state
    }

}