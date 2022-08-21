import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component{
    state = {
        title: ''
    }

    handleOnChangeTask = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleClick = (e) => {
        if(!this.state.title) {toast.error('Missing Title'); return;}
        this.props.addNewToDo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        })
        this.setState({
            id: '',
            title: ''
        })
    }
    render() {
        let {title} = this.state;
        return(
            <div className='add-todo'>
                <input type='text' value={title} onChange={(e) => this.handleOnChangeTask(e)}/>
                <button type='submit' onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}

export default AddToDo;