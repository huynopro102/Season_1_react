import React from "react";

import {
  NavLink,
  Link,
} from "react-router-dom";
//
import { withRouter } from "react-router";
class Nav extends React.Component {

 async handleClick() {  
    await setInterval(() => {     
      window.location.reload()
    },100);

  }



  render() {

    return (
      <div class="topnav">


        <NavLink activeClassName="active" onClick={this.handleClick} to="/home">home</NavLink>
        <NavLink activeClassName="active" onClick={this.handleClick} to="/todo">todo</NavLink>
        <NavLink activeClassName="active" onClick={this.handleClick} to="/about">about</NavLink>
        <NavLink activeClassName="active" onClick={this.handleClick} to="/user">user</NavLink>

       
      </div>
    )
  }
}

export default withRouter(Nav);
