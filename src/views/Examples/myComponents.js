import React from 'react'
import AddComponents from './addComponents'
import ChildComponents from './childComponents'

class MyComponents extends React.Component {
    state = {
      arrJobs: [{
        id: '',
        title: '',
        salary: ''
      }]
    }

    addNewJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob.push(job);

        this.setState({
          arrJobs: currentJob
        })

        console.log('Check from Parents: ', this.state)
    }

    deleteAJob = (job) => {
      let currentJob = this.state.arrJobs;
      currentJob = currentJob.filter(item => item.id !== job.id);
      
      this.setState({
        arrJobs: currentJob
      })
    }
    
    render(){
      return(
        <>
          <AddComponents addNewJob={this.addNewJob}/>

          <ChildComponents 
            arrJobs={this.state.arrJobs}
            deleteAJob={this.deleteAJob}
          />
        </>

      )
    }

}

export default MyComponents;