import React, { Component } from 'react';
import List from './List';


export default class TestList extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            row:0,
            item:0
        };

        this.matrix = [
            [0],
            [0,1,2,3,4],
            [],
            [0,1,2]
        ];
        this.handleKey = this.handleKey.bind(this);
        this.showLists = this.showLists.bind(this);
        this.reset = this.reset.bind(this);
    };

    reset() {
        this.setState({
            focused: -2,
            row: 0,
            show: true
        });
    }

    showLists() {
        this.setState({
            show: true
        });
    }

    previousCursor(matrix, row, item){
        if (row > 0) {
            if (item === 0) {
                let prevRow = row - 1;
                let prevLength = matrix[prevRow].length;
                this.setState( (prevstate) => {
                    return{
                        row: prevRow, 
                        item: prevLength
                    };
                });
            } 
            else if (item < 0) { 
                this.setState((prevstate) => { 
                    return{ item: prevstate.item - 1};
                });
            } 
        }
        
    }

    nextCursor(matrix, row, item){
        
        if (row < matrix.length) {
            if (matrix[row].length > 0) {
                if (matrix[row].length < item) {
                    this.setState( (prevstate) => {
                        return{
                            row: index,
                            item: 0
                        };
                    });
                } else {
                    this.setState((prevstate) => { 
                        return{ item: prevstate.item + 1};
                    });
                }
            } 
        }
    }

    
    handleKey(event) {
        switch(event.keyCode){
            case 38:    // up
                // this.upFocus();
                this.previousCursor(this.matrix, this.state.row, this.state.item);
                break;
            case 40:    // down
                // this.downFocus();
                this.nextCursor(this.matrix, this.state.row, this.state.item);
            default:
        }
    }

    render() {
        // console.log('fc: ',this.state.focused);
        // console.log('sc: ',this.state.row);
        console.log('current row: ',this.state.row+' item: '+ this.state.item);
        
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
                        item={this.state.item} 
                        row={this.state.row}/>
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
