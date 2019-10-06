const initialState = {
    posts: [{ id: 1, title: 'You can win !!', desc: 'Yess ! that\'s write. you can win if you are a one flying player !!' }]
}
function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':

            action.payLoad.id = state.posts.length + 1;
            return {
                ...state,
                posts: [action.payLoad, ...state.posts]
            }
        case 'DELETE_POST':
            let newState = state.posts.filter((data) => data.id !== action.payLoad.id);
            return {
                ...state,
                posts: newState
            }
        case 'UPDATE_POST':
            return {
                ...state,
                posts: state.posts.map((data) => {
                    if (data.id === action.payLoad.id) {
                        data.title = action.payLoad.title;
                        data.desc = action.payLoad.desc;
                    }
                    return data;
                })
            }
        default:
            return state;
    }
}

export default postReducer;