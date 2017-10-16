import React from 'react'
import { connect } from 'react-redux'

import {addTodo} from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                if (!input.value.trim()) {  //check null input
                    return
                }
                dispatch(addTodo(input.value)) // send data to action creator
                input.value = ''
            }}>
                <div className="form-group">
                    <input placeholder="Add To do" ref={node =>
                        input = node
                    } />
                    <button type="submit" className="btn btn-primary">
                        Add Todo
                </button>
                </div>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo