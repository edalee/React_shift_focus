import React, { Component } from 'react';
import styles from './List.css';


export default class List extends Component {
    constructor(props){
        super(props);

        this.navlistOne = this.navlistOne.bind(this);
        this.navlistTwo = this.navlistTwo.bind(this);
        this.navlistThree = this.navlistThree.bind(this);
        // this.selectFocal = this.selectFocal.bind(this)
    };

    componentWillUpdate(nextProps, nextState) {
        // console.log(this.props.focused)
    }

    componentDidUpdate() {
                
        if (this.props.row === 0 && this.props.item === 0) {
            this.first.focus();
        }
        if (this.props.row === 1) {
            this.L1.children[this.props.item].focus();
            // this.L1.refs.children[this.props.this.props.item]
            // console.log(this.L1.refs)
        }
        if (this.props.row === 2) {
            this.L2.children[this.props.item].focus();
            // L2.children[this.props.item].focus()
        }
        if (this.props.row === 3) {
            this.L3.children[this.props.item].focus();
            // L3.children[this.props.item].focus()
        }
    }

    navlistOne() {
        const navList = [
            {
                name:'item 1',
                link:'/#',
            }, { 
                name:'item 2',
                link:'/#' 
            }, {
                name:'item 3',
                link:'/#' 
            }, {
                name:'item 4',
                link:'/#' 
            }, {
                name:'item 5',
                link:'/#' 
            }
        ];

        return (
            <div ref={(div) => this.L1 = div } className={styles.list}>
                { navList.map((item, index) => {
                    return (
                        <a key={index} 
                            ref={(a) => this.index = a }   
                            tabIndex={index + 1} >
                            <b>{item.name}</b>
                        </a>
                    );
                })}
            </div>
        );
    }

    navlistTwo() {
        const navList = [
            {
                name:'Queensbridge',
                link:'/#',
            }, { 
                name:'South',
                link:'/#' 
            }, { 
                name:'South',
                link:'/#' 
            }, { 
                name:'Bronx',
                link:'/#' 
            }, { 
                name:'QB is rocking it!',
                link:'/#' 
            }
        ];
        // ref={'L2-',index + 1}   
        return (
            <div ref={(div) => this.L2 = div} className={styles.list}>
                { navList.map((item, index) => {
                    return (
                        <a key={index} 
                            ref={(a) => this.index = a }   
                            tabIndex={index + 1} >
                            <b>{item.name}</b>
                        </a>
                    );
                })}
            </div>
        );
    }
    
    navlistThree() {
        const navList = [
            {
                name:'Take another item 1',
                link:'/#',
            }, { 
                name:'Take another item 2',
                link:'/#' 
            }, { 
                name:'Take another item 3',
                link:'/#' 
            }, , { 
                name:'Take another item 4',
                link:'/#' 
            }, { 
                name:'Take another item 5',
                link:'/#' 
            }
        ];
        // ref={'L3-', index + 1}
        return (
            <div ref={(div) => this.L3 = div } className={styles.list}>
                { navList.map((item, index) => {
                    return (
                        <a key={index}
                            ref={ (a) => this.index = a }
                            tabIndex={index+1} >
                            <b>{item.name}</b>
                        </a>
                    );
                })}
            </div>
        );      
    }

    
    render() {
        // let curElement = document.activeElement
        // console.log(curElement)
        return (
            <div className={styles.listContainer}>
                <div className={styles.showAll} tabIndex="1"  
                    ref={(a) => this.first = a }>
                    <a tabIndex="1">Show all results...</a>
                </div>
                { this.navlistOne() }
                { this.navlistTwo() }
                { this.navlistThree() }
            </div>
        );
    }
}
