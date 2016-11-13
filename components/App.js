import React, { Component } from 'react';
import Layout from './Layout';


class App extends Component {
    constructor(){
        super();
    };

    
    render() {
        return (
            <div className="app">
                <Layout />
            </div>
        );
    }
}

export default App;
