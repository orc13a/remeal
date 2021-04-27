const userReducer = (users = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return action.payload;
        case 'ERROR':
            return action.payload;
        default:
            return users;
    }
}

export default userReducer;