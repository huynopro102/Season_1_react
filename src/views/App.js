import logo from './logo.svg';
import './App.scss';
import './Nav/nav.css'
import ListTodo from './todos/ListTodo'
import ListUser from './Users/listUser.js';
import DetailUser from '../views/detailUser/DetailUsers.js';
//
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//
import Nav from './Nav/nav.js'
//

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>about</h2>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>

            <Route  path="/home" >
              <Home />
            </Route>

            <Route path="/todo">
              <ListTodo />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/user">
             <ListUser/>
            </Route>


            <Route path="/detailUser/:id">
             <DetailUser/>
            </Route>


          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
