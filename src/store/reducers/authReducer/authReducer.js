const authState = {
    user: null,
    isAuth: false
}

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {...state, isAuth: true, user: action.payload};
        case "USER_LOGOUT":
            return {...state, isAuth: false, user: null};
        default:
            return state;
    }
}

export default authReducer;