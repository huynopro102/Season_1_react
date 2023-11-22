import React from "react";
import axios from "axios";
import '../Users/listUser.css'
import { withRouter } from "react-router";
class listUser extends React.Component {
    state = {
        listUsers: [] ,
        user : {}
    }
    async componentDidMount() {
        try{
            let reponse = await axios.get("https://reqres.in/api/users?page=1")
            this.setState  ({
                listUsers: reponse.data.data
            });
        }catch(error){
            console.error("Error fetching data: ", error);
        }
    }
    handlOnClick = (item)=>{
        this.setState({
            user : item
        })
        setInterval(() => {
            this.props.history.push(`/detailUser/${item.id}`)
            window.location.reload()
        }, 10);
    }
    render() {
        const listusers = this.state.listUsers
        return (
            <div className="listUserContainer"> 
               { listusers.map((item,index)=>{
                    return (
                        <div onClick={ () => this.handlOnClick(item) }    key={item.id} className="UserItem" >
                            <span>  {index+1} - {item.first_name}  </span>
                        </div>
                    ) 
                }) }
            </div>
        )
    }
}
export default withRouter(listUser);