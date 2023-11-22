import React from "react";

class addComponent extends React.Component {
  
    state = {
        title: '',
        salary: '',
        arrJobs: [
          { id: 'abcJob1', title: 'Developers', salary: '500' },
          { id: 'abcJob2', title: 'Testers', salary: '400' },
          { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
      }
      onChangeTitleJob(event) {
        this.setState({
          title: event.target.value,
    
        })
      }
      onChangeSalary(event) {
        this.setState({
          salary: event.target.value
        })
      }
      handleOnClick(event) {
        if(!this.state.title|| !this.state.salary){
          alert("khong de rong thong tin")
          event.preventDefault()
        }else{
          event.preventDefault()
          this.props.newjob({
             id: ( Math.random()*100).toFixed(0), 
             title : this.state.title ,
             salary : this.state.salary 
        })
          console.log(this.state)
          this.setState({
            title : "",
            salary: "" ,
          })
        }
      }
  
    render() {
        return (
            <div>

                <form>
                    <label htmlFor="fname">title : {this.state.title}</label>
                    <br />
                    <input onChange={(event) => this.onChangeTitleJob(event)} type="text" value={this.state.title} />
                    <br />
                    <label htmlFor="fname">salary : {this.state.salary}</label>
                    <br />
                    <input type="text" onChange={(event) => this.onChangeSalary(event)} value={this.state.salary} />
                    <br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleOnClick(event)} />
                </form>
            </div>
        )
    }

}

export default addComponent;