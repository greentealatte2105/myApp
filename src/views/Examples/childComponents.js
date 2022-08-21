import React from 'react'
import './Demo.scss'

class ChildComponents extends React.Component {
   state = {
        showJob: false,
   }
   handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
   }
   handleDelete = (job) => {
        this.props.deleteAJob(job);
   }
   render(){
        let {arrJobs} = this.props;
        let {showJob} = this.state;
        return(
            <>
                {
                    showJob === false ?
                    <>
                        <button 
                        onClick={this.handleShowHide}
                        className="btn-show">
                            Show
                        </button>
                    </>
                    :
                    <>
                        {
                            arrJobs.map((item,index) => {
                                return(
                                    <div key={item.id}>
                                         {item.title} - {item.salary}$ <></>
                                        <span onClick={() => this.handleDelete(item)}>X</span>
                                    </div>
                                )
                            })
                        }
                        <button onClick={this.handleShowHide}>Hide</button>
                    </>
                }
            </>
        )
   }
}

export default ChildComponents;