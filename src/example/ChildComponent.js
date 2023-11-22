import React from 'react';
import './Demo.scss'
class ChildComponent extends React.Component {

  state = {
    showJobs: false
  }

  handleShowHide = (status) => {
    this.setState({ 
      showJobs: !this.state.showJobs
    })
  }
  onclickDelete = (item) =>{
   this.props.deleteJob(item)
  }
  render() {
    const { arrJobs } = this.props;
    const { showJobs } = this.state
    return (
      <div>
        {showJobs === false ?
          <div><button style={{ color : 'black', fontSize:'20px' }}
          onClick={this.handleShowHide}>show</button>
          </div>
          :
          <div className='job-lists'>
            {arrJobs.map((item, index) => (
              <div key={item.id}>{item.title} - {item.salary} - <span onClick={() => this.onclickDelete(item)} >xoa</span> </div>
            ))}
            <div>
              <button onClick={this.handleShowHide}>hide</button>
            </div>
          </div>
        }
      </div>
    );
  }
}
export default ChildComponent;
   