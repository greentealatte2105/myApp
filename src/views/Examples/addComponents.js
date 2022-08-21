import React from "react";


class AddComponents extends React.Component{
   state = {
        title: '',
        salary: ''
   }

   handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
   }
   handleOnChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('>>> check submit data: ', this.state)
        e.preventDefault();
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
   render(){
    return(
        <>
            <form>
                <div>Job's Title</div>
                <input type='text' value={this.state.title} onChange={(e) => this.handleOnChangeTitle(e)}/>
                <div>Job's Salary</div>
                <input type='text' value={this.state.salary} onChange={(e) => this.handleOnChangeSalary(e)}/> 
                <br/> <br/>
                <input type='submit' value="Submit" onClick={(e) => this.handleSubmit(e)} />
            </form>
        </>
    )
   }
}

export default AddComponents;