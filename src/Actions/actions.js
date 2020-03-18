import {ADD_TODO, COMPLETE_TODO, EDIT_TODO} from './types'
import {DELETE_TODO} from './types'

export const Add = newTodo => {
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}
export const Delete = id => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}
export const Completed = completed => {
    return {
        type: COMPLETE_TODO,
        payload: completed
    }
}
export const Update = updatedTodo =>{
    return{
        type: EDIT_TODO,
        payload: updatedTodo
    }
}
