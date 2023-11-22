import React from "react";
import './ListTodo.scss'
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: "doing homework" },
            { id: "todo2", title: "making video" },
            { id: "todo3", title: "fixing bugs" },
            { id: "todo4", title: "fdafjlakdsj" },
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }
    handleDeleteTodo = (item) => {
        const currentListTodos = this.state.listTodos.filter(p => p.id !== item.id)
        this.setState({
            listTodos: currentListTodos
        })
        toast.success('🦄 delete succeed !', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    handleEditTodo = (item) => {
     let {editTodo , listTodos } = this.state;
     const isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === item.id){
            const ListTodoCopy = [...listTodos]
            const indexReplace = ListTodoCopy.findIndex(f => f.id ===item.id)
            ListTodoCopy[indexReplace].title = editTodo.title
            this.setState({
                listTodos : ListTodoCopy ,
                editTodo : {}
            })
            editTodo = ""
            return ;
        }
        this.setState({
            editTodo : item
        })
    }
    handleOnchangeEditTodo = (event)=>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
            this.setState({
                editTodo : editTodoCopy
            })
    }
    render() {
        let { listTodos, editTodo } = this.state
        const isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container" >
                <AddToDo
                    addNewTodo={this.addNewTodo}
                    listTodos={this.state.listTodos}
                />
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&    
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id} >
                                    {
                                        <>
                                            {
                                                isEmptyObj === true ? 
                                                <span>{index + 1} - {item.title}</span> :
                                                <>
                                                {
                                                    editTodo.id === item.id ? 
                                                    <span> {index+1} - <input value={editTodo.title}
                                                    onChange={(event)=> this.handleOnchangeEditTodo(event)} 
                                                    /> </span>  
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }      
                                                </>
                                            }
                                            <button className="btn-edit" onClick={() => this.handleEditTodo(item)}  >
                                                {isEmptyObj === false && editTodo.id === item.id  ?
                                                "save"
                                                :
                                                "edit"
                                                }
                                            </button>

                                            <button className="btn-delete" onClick={() => this.handleDeleteTodo(item)} >
                                                delete
                                            </button>
                                        </>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
export default ListTodo;