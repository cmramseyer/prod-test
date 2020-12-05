const initialState = {
    token: null,
    username: null,
    userId: null,
    isAuthenticated: false
}


const authReducer = (state = initialState, action) => {
    console.log('reducer action')
    console.log(action)
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            const userData = action.payload.userData;
            return {
                ...state,
                token: userData.auth_token,
                userId: userData.id,
                username: userData.user,
                isAuthenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                userId: null,
                username: null,
                isAuthenticated: false
            }
        default:
            return state;

    }
}

export default authReducer;