import React from 'react'
import { connect } from 'react-redux'

import addTodo from '../actions/index'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                if (!input.value.trim()) {  //check null input
                    console.log('trim')
                    return
                }
                dispatch(addTodo(input.value)) // send data to action creator
                input.value = ''
            }}>
                <input ref={node =>
                    input = node
                } />
                <button type="submit">
                    AddTodo
                </button>
            </form>
        </div>
    );
}

AddTodo = connect()(AddTodo)

export default AddTodo;