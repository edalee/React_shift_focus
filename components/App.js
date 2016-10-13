import React, { Component } from 'react'


class App extends Component {

    
    getVal(){
        const firstName = 'Edward'
        const lastName = 'Lee'
        return `Hello there ${firstName} is your last name ${lastName}.`
    }

    render() {
        return (
            <div className='app'>
                <h1>Hello World</h1>
                <p>{this.getVal()}</p>
            </div>
        )
    }
}

export default App
