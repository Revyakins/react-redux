export default function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + action.payload;
        default:
        return state;
    }
}