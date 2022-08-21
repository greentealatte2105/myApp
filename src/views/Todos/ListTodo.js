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
        let {listToDos} = this.state.listToDos;
        return(
            <div className='list-todo-container'>
            <div>Type your Task here</div>
            <AddToDo addNewToDo={this.addNewToDo}/>

                <div className='list-todo-content'>
                    {listToDos && listToDos.length > 0 && 
                        listToDos.map((item, index) => {
                            return(
                               <div className='todo-child'>
                                    <span> {index + 1} - {item.title} </span>
                               </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}   

export default ListToDo;