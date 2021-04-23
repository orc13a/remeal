export default (users = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [... users, action.payload];
        default:
            return users;
    }
}