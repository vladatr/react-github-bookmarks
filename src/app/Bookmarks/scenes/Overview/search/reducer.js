export default function searchReducer(state={
    items: [],
    show: true
}, action) {
    switch(action.type) {
        case 'RESULTS_FETCHED':
        console.log("reduces RESULTS_FETCHED")
        debugger
         return Object.assign({items: action.payload, show: true})

         case 'TOGGLE_REPOS':
         debugger
            return Object.assign({}, {items: state.items, show: action.show });
           
        default:
            return state
    }

}