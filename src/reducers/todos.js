const todos = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    "id": action.id,
                    "text": action.text,
                    "complete": false
                }
            ]
            break;
        case 'TOGGLE_TODO': 
            return state.map( todo => 
                (todo.id === action.id) ? { ...todo, complete: !todo.complete} : todo
            )
        default:
            break;
        return state
    }
}

export default todos;