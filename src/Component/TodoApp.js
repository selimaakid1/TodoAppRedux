import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Delete, Completed, Update } from '../Actions/actions'
import { Add } from '../Actions/actions'


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            edit: false
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    setUpdate = e => {
        this.setState({
            newText: e.target.value
        })

    }
    edit = el => {
        if (!this.state.edit) {
            this.setState({
                edit: el.id,
                newText: el.text
            })
        } else {
            this.props.editNewTodo({
                text: this.state.newText, id: this.state.edit, complete: false
            })
            this.setState({
                edit: null
            })

        }
    }

    render() {
        return (
            <div>
                <div className='todoApp'>
                    <div className='Text'>
                        <h1 className='Title'>
                            Daily Todos Lists
                    </h1>
                        <h5 className='Add'>
                            Add new To-Do
                    </h5>
                        <div className='Input'>
                            <input type='text' onChange={this.handleChange} value={this.state.text} />
                            <Button onClick={() => this.props.addNewToDo({ text: this.state.text, id: uuidv4(), complete: false })}>Add</Button>
                        </div>
                    </div>
                    <div className='NewItems'>
                        <h2 className='Work'>
                            Let's get some work done!
                    </h2>
                        {this.props.allTodos.map(el =>
                            <div className='newItemsp' >{
                                el.id !== this.state.edit ?
                                    <h4 className={el.done ? 'TodoDone' : 'TodoNotDone'}>{el.text}</h4> : <input type='text' value={this.state.newText || el.text} onChange={this.setUpdate} />}
                                <div className='newBtn'>
                                    <Button onClick={() => this.props.completeToDo(el.id)}>{el.done ? "Undo" : "Complete"}</Button>
                                    <Button onClick={() => this.props.deleteToDo(el.id)}>Delete</Button>
                                    <Button onClick={() => this.edit(el)}>{this.state.edit ? 'Done' : 'Edit'}</Button></div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allTodos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewToDo: todo => dispatch(Add(todo)),
        deleteToDo: todo => dispatch(Delete(todo)),
        completeToDo: itsDone => dispatch(Completed(itsDone)),
        editNewTodo: edited => dispatch(Update(edited))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)