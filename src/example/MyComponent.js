import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './addComponent'


class MyComponents extends React.Component {

  state = {

    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500' },
      { id: 'abcJob2', title: 'Testers', salary: '400' },
      { id: 'abcJob3', title: 'Project managers', salary: '1000' }
    ]
  }

  newjob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
    console.log(this.state.arrJobs)
  }
  deleteJob = (job) => {
    const result = this.state.arrJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: result
    })
  }

  componentDidMount(){
    console.log("day la componentDidMount")
  }
  componentDidUpdate(prevProps,prevState){
    console.log("prevProps ", prevProps , "current props " , this.props )
    console.log("prevState ",prevState , "current State ",this.state)

  }


  render() {
    console.log("play function render");
    return (
      <div>
       
        <AddComponent
          newjob={this.newjob}
          deleteJob={this.deleteJob}
        />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </div>
    );
  }

}
export default MyComponents;