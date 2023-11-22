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
        {/* <NavLink activeClassName="active" onClick={this.handleClick} to="/detailUser/2">detail user</NavLink> */}

{/* 
        <a className="/home" onClick={this.handleClick} href="/home">home</a>
        <a className="/todo" onClick={this.handleClick} href="/todo">todo</a>
        <a className="/about" onClick={this.handleClick} href="/about">about</a> */}

        {/* <Link to="/home"> home</Link>
        <Link to="/about"> About</Link>
        <Link to="/todo"> todo</Link> */}

        {/* <NavLink 
        activeClassName="active"
        to="/faq" 
        onClick={this.handleClick} 
        >
          FAQs
        </NavLink>

        <NavLink 
        activeClassName="active"
        to="/home" 
        onClick={this.handleClick} 
        >
          home
        </NavLink>

        <NavLink 
        activeClassName="active"
        to="/about" 
        onClick={this.handleClick} 
        >
          about
        </NavLink>

        <NavLink 
        activeClassName="active"
        to="/todo" 
        onClick={this.handleClick} 
        >
          todo
        </NavLink> */}
      </div>
    )
  }
}

export default withRouter(Nav);
