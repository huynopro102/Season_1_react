import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddToDo extends React.Component {

    state = {
        title: ""
    }

    handleOnchangeTile = (event) => {
        this.setState({
            title: event.target.value
        })

    }

    handleAddToDo = (event) => {
        if (!this.state.title) {
            // undefind , null , empty => false
            toast.info('🦄 do not empty title', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        let todo = {
            id: Math.random() * 1000,
            title: this.state.title
        }
        this.setState({
            title: ""
        })

        this.props.addNewTodo(todo)
        toast.success('🦄 add item succeed !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    render() {
        return (
            <div className="add-todo" >
                <input type="text" className="btn-add" value={this.state.title} onChange={(event) => this.handleOnchangeTile(event)} />
                <button type="button" onClick={(event) => this.handleAddToDo(event)} > add </button>
            </div>
        )
    }
}
export default AddToDo;