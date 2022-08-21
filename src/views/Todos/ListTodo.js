import React from 'react'
import AddToDo from './AddToDos';
import './ListTodo.scss'
import { toast } from 'react-toastify';


class ListToDo extends React.Component{

    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing Homework' },
            {id: 'todo2', title: 'Data Request' },
            {id: 'todo3', title: 'Clean my house' },
        ]
    }

    addNewToDo = (task) => {
        this.setState(
            {
                listTodos: [...this.state.listTodos, task]
            }
        )
        toast.success('Đã thêm: ' + task.title);
    }

    handleEdit = () => {

    }

    handleDelete = (task) => {

        let currentList = this.state.listTodos;
        currentList = currentList.filter((item, index) => item.id !== task.id)

        this.setState(
           {
            listTodos: currentList
           }
        )
    }

    render() {
        let {listTodos} = this.state;

        return(
            <div className='list-todo-container'>
                <div>Type Here Your Task: </div>
                <AddToDo
                addNewToDo={this.addNewToDo}/>

                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return(
                                <div className='todo-child' key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <div className='btn'>
                                        <button className='Edit'>Edit</button>
                                        <button className='Delete' onClick={() => this.handleDelete(item)}>Delete</button>
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