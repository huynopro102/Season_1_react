import React from "react";  
import axios from "axios";
import { withRouter } from "react-router";
class DetailUser extends React.Component{

    state = {
        user : {}
    }
    async componentDidMount(){
        let user1 = await axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)   
        console.log("user 1",user1)
        this.setState({
            user : user1.data.data ? user1.data.data : {}
        })
    }
    handleOnClickBack = () =>{
        setInterval(() => {
            this.props.history.push("/user")
            window.location.reload()
        }, 100);
    }
    render(){
       console.log("check props ",this.props)
       console.log("check user ",this.state.user)
        return (    
         <>
            <h2>{this.state.user.id}</h2>
            <h2>{this.state.user.first_name}</h2>
            <h2>{this.state.user.last_name}</h2>
            <h2>{this.state.user.email}</h2>
            <>  <img src={this.state.user.avatar} alt="Hình ảnh trong HTML" />  </>
            <br>
            </br>
            <button onClick={() => this.handleOnClickBack()} >back</button>
         </>
        )
    }
}

export default withRouter(DetailUser);