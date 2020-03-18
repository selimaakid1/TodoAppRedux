import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO } from "../Actions/types"

const todoReducer = (state = [], actions ) => {
    switch(actions.type){
        case ADD_TODO:
            return state.concat(actions.payload)
            break
        case DELETE_TODO:
            return state.filter(el => actions.payload !== el.id)
            break
        case COMPLETE_TODO:
            return state.map(el => el.id === actions.payload  ? {...el, done : !el.done} : el)
            break
        case EDIT_TODO:
            return state.map(el => el.id === actions.payload.id ? actions.payload : el )     
            default:
               return state 
    }
    

}
export default todoReducer