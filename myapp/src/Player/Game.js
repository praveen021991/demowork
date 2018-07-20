import React, { Component } from 'react';

class Game extends Component{
    constructor(){
        super();
        console.log("In Game's constructor");
    }
    componentWillMount(){
        console.log("In Game's componentWillMount");
    }
    render() {
        return(
            <div>
                <h2>Game type:{this.props.name}</h2>
                <p>Game players:{this.props.players}</p>
                <input type="text" 
                    onChange={this.props.change} 
                    value={this.props.name}/>
                </div>
        )
    
    }
    componentDidMount(){
        console.log("In Game's componentDidMount");
    }
    // end of creation life cycle hooks
    // begin updation hooks
    componentWillReceiveProps(nextProps){
        console.log(nextProps, "In Game's componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState, "In Game's shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("In Game's componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState, "In Game's componentDidUpdate");
    }
    // end of updation life cycle hooks
} 
export default Game;