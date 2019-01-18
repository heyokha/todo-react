import React from 'react';
import {render} from 'react-dom';
import AddTodo from './AddTodo';
import CreateList from './CreateList';
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            todolist: [],
        }
    }
    handlerAddToList(data) {
        console.log('data', data);
        // const a = {id: 0};
        const array = this.state.todolist;
        array.push(data);
        console.log(array);
        this.setState({ todolist: array })
    }
    remover(id) {
        const newlist = this.state.todolist.filter(item => item.id !== id);
        console.log(newlist);
        this.setState({ todolist: newlist })
    }
    changeStatus(id) {
        const newlist = this.state.todolist.map(item => {
            if (item.id === id) {
                return {
                    title: item.title,
                    id: item.id,
                    status: !item.status
                }
            }
            return item;
        })
        this.setState({ todolist: newlist })
        console.log(id, newlist)
    }
    render() {
        return(
            <div>
                <AddTodo addToList={(e) => this.handlerAddToList(e)}/>
                <CreateList todolist={this.state.todolist} remover={(e) => this.remover(e)} changeStatus={(e) => this.changeStatus(e)}/>
            </div>
        ) 
    }
}

render(<App />, document.getElementById('app'));

module.hot.accept();