

export function fetchCats() {
    
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"})
        fetch('http://10.0.0.99:4000/db').then(response => {
            return response.json()
            }).then(responseJSON => {
            debugger;
            })
        // fetch('http://localhost:4000/db').then(response => {
        // return response.json()
        // }).then(responseJSON => {
        // console.log(responseJSON)
        // })
    }
}