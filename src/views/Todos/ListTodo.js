import React from 'react'
import AddToDo from './AddToDos';
import './ListTodo.scss'
import { toast } from 'react-toastify';


class ListToDo extends React.Component{

    state = {
        listToDos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Finish task'}
        ]
    }
    addNewToDo = (task) => {
        this.setState(
            {listToDos: [...this.state.listToDos, task]}
        )
        toast.success('Successfully added your task')
    }
    render() {
        let {listToDos} = this.state;
        return(
            <div className='todo-list-container'>
                <div>Type your task here </div>
                <AddToDo addNewToDo={this.addNewToDo}/>
                    <div className='list-todo-content'>
                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        <span> {index + 1} - {item.title} </span>
                                        <div className='btn'>
                                            <button className='Edit'>Edit</button>
                                            <button className='Delete'>Delete</button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
            </div>
        )
    }
}   

export default ListToDo;