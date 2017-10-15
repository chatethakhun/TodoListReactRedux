import { connect } from 'react-redux'

import TodoList from '../component/TodoList'

const getVisibleTodos = (todos) => {
    console.log(todos)
    switch (todos) {
        case 'SHOW_ALL':
            return todos
            break;

        default:
            break;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)
    }
}

const VisibleTodoList = connect(
    mapStateToProps
)(TodoList)

export default VisibleTodoList;