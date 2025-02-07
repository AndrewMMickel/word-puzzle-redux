const reducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE":
            return !state;
        case "RESET":
            return false;
        default:
            return state;
    }
}

export default reducer;