import React from 'react';

class CreateList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return(
            <div>
                {
                    this.props.todolist.map((item) => {
                        return (<div key={item.id}>
                                    <div onClick={() => this.props.changeStatus(item.id)}>
                                        <p 
                                        className={item.status ? 'finished' : 'unfinished' } 
                                        >{item.title}</p>
                                    </div>
                                <button onClick={() => this.props.remover(item.id)}>x</button>
                            </div>);
                    }) 
                }
            </div>
        )
    }
}

export default CreateList;