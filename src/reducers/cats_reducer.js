

export default (state = {
    loading: false,
    pictures: []
}, action) => {

    // debugger;
    switch (action.type) {
        case "LOADING_CATS":
            return Object.assign({}, state, {loading: true})

        case "FETCH_CATS":
        debugger;
            return {loading: false, pictures: action.payload}
    
        default:
            return state
    }

}