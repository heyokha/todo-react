import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: 0
        }
    }
    addTitle(e) {
        this.setState({ title: e.target.value })
    }
    handlerAdd() {
        this.setState({ id: this.state.id + 1 })
        let todo = {title: this.state.title, status: false, id: this.state.id};
        this.props.addToList(todo);
        this.setState({title: ''})
        console.log('add', todo)
    }
    handleKeyboard(e)  {
        if (e.keyCode === 13) {this.handlerAdd()}
    }
    render() {
        return(
            <div>
                <input type='text' value={this.state.title} onChange={(e) => this.addTitle(e)} onKeyUp={(e) => this.handleKeyboard(e)} />
                <button onClick={() => this.handlerAdd() }>Add</button>
            </div>
        )
    }
}

export default AddTodo;