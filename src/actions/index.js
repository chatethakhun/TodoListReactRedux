let nextTodoId = 0

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export function setVisiblityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export default addTodo

