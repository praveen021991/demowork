import React, {Component} from 'react';
import Radium from 'radium';

class Person extends Component{
    componentDidMount(){
        //console.log("after render, component has mounted");
    }
    constructor(props){
      super(props);
        //console.log('starting creation hook: inside constructor');
        this.valid = props.isLoggedin;
        // here is ajax call ();
        this.state = {
            sample: "samad"
        };
    }
    componentWillMount(){
        //console.log("see component will mount comes" + 
        //"after constructor but before render");
        this.setState({
            sample: "Sushara"
        });
    }

    render(){
        var btnStyles = {
            backgroundColor: "yellow",
            color: "black",
            "@media screen and (min-width: 700px)":{
                backgroundColor: "blue"
        }
    }
        console.log("inside render");
        var a = this.valid ? 
        (<div>valid Component: {this.props.testProp}<button style={btnStyles}>Person Button</button></div>): 
        (<div>invalid Component</div>);
        return a;
    }
}

export default Radium(Person);