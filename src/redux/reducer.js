const initialState = {
    name: '',
    age: 0,
    gender: ''
}


const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "UPDATE_DATA":
            return {...state, ...action.payload};
        default:
            return state
    }
}


export default rootReducer


