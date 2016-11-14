import React, { Component } from 'react';
import List from './List';


export default class TestList extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused: -2,
            show: false,
            section: 0
        };
        this.handleKey = this.handleKey.bind(this);
        this.showLists = this.showLists.bind(this);
        this.reset = this.reset.bind(this);
    };

    reset() {
        this.setState({
            focused: -2,
            section: 0,
            show: true
        });
    }

    showLists() {
        this.setState({
            show: true
        });
    }

    upFocus() {
        let section = this.state.section;
        let focused = this.state.focused;       

        if (section >= 0) {
            if (section === 0) {
                if (focused > -2) {
                    this.setState({
                        focused: focused - 1,
                    });
                }
            }
            if (section === 1) {
                if (focused > 0) {
                    this.setState({
                        focused: focused - 1,
                    });
                }
                else {
                    this.setState({
                        focused: focused - 1,
                        section: 0
                    });
                }
            }
            if (section === 2) {
                if (focused > 0) {
                    this.setState({
                        focused: focused - 1,
                    });
                }
                else {
                    this.setState({
                        focused: 4,
                        section: 1
                    });
                }
            }
            if (section === 3) {
                if (focused > 0) {
                    this.setState({
                        focused: focused - 1,
                    });
                }
                else {
                    this.setState({
                        focused: 4,
                        section: 2
                    });
                }
            }
        }
    }

    downFocus() {
        let section = this.state.section;
        let focused = this.state.focused;

        if (section < 4) {
            if (section === 0) {
                if (focused < -1) {
                    this.setState({
                        focused: focused + 1,
                    });
                }
                else {
                    this.setState({
                        focused: focused + 1,
                        section: 1,
                    });
                }
            }
            if (section === 1) {
                if (focused < 4) {
                    this.setState({
                        focused: focused + 1,
                    });
                }
                else {
                    this.setState({
                        focused: 0,
                        section: 2
                    });
                }
            }
            if (section === 2) {
                if (focused < 4) {
                    this.setState({
                        focused: focused + 1,
                    });
                }
                else {
                    this.setState({
                        focused: 0,
                        section: 3
                    });
                }
            }
            if (section === 3) {
                if (focused < 4) {
                    this.setState({
                        focused: focused + 1,
                    });
                }
            }
        }
    }

    handleKey(event) {
        switch(event.keyCode){
            case 38:    // up
                this.upFocus();
                break;
            case 40:    // down
                this.downFocus();
            default:
        }
    }

    render() {
        console.log('fc: ',this.state.focused);
        console.log('sc: ',this.state.section);
        
        if (this.state.show) {
            return (
                <div onKeyUp={(event) => this.handleKey(event)} >
                    <input type="text" 
                        placeholder={this.props.placeholderText}
                        ref={(input) => this.searchInput = input }
                        onFocus={ this.showLists } 
                        onBlur={ this.reset } />
                    <List 
                        ref="listComp" 
                        focused={this.state.focused} 
                        section={this.state.section}/>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <input type="search" 
                        placeholder={this.props.placeholderText}
                        onFocus={ this.showLists }  
                        onBlur={ this.reset } 
                        />
                </div>
            );
        }
    }
}
