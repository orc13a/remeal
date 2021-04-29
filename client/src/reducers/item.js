const itemReducer = (item = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...item, action.payload];
        default:
            return item;
    }
}

export default itemReducer;