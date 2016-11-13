import React, { Component } from 'react';
import Title from'./Title';
import TestList from'./TestList';

const user = {
    subject: 'focus',
    method: 'Refs',
    
};

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
          title: 'Moving Focus with arrow keys.',
          placeholder:'Search for something...'
        };
    }

    getVal() { 
        return `This is how to shift ${this.state.subject} with ${this.state.tool} across multiple components. This could be improved by handling varible input data:- how many items are in a list, how many lists.`;
    };

    changeTitle(title) {
        this.setState({title});
    }

    render() {        
        console.log(this.props);

        return (
            <div >
                <Title title={ this.state.title } />
                <p>{ this.getVal() }</p>
                <TestList placeholderText={this.state.placeholder} />
            </div>
        );
    }
}
