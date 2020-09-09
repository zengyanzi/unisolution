import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            name: ''
        };
    }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        const name = this.state.name
        const names = [...this.state.names, name]
        this.setState({
            names: names
        });
        this.state.name = ''
    }
    render() {
        return (
            <div>
                <Scrollbars
                  style={{ height: 100 ,backgroundColor:'#cccccc'}}>
                    <ul>
                        {
                            this.state.names.map((name, index) => {
                                return <li key={index.toString()}>{name}</li>
                            })
                        }
                        </ul>
                 </Scrollbars>
                <form onSubmit={this.onFormSubmit}>
                    <input
                    type="text"
                    placeholder="Content"
                    value={this.state.name}
                    onChange={this.onNameChange}/>

                    <input type="submit" value="Submit"/>
                 </form>
            </div>
        );
    }
}