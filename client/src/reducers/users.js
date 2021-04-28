const userReducer = (users = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...users, action.payload];
        //case 'LOGIN': 

        case 'ERROR':
            return action.payload;
        default:
            return users;
    }
}

export default userReducer;