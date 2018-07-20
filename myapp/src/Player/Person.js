import React, {Component} from 'react';

class Person extends Component{
    componentDidMount(){
        //console.log("after render, component has mounted");
    }
    constructor(props){
      super(props);
        //console.log('starting creation hook: inside constructor');
        this.valid = true;
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
        //console.log("inside render");
        var a = this.valid ? 
        (<div>valid Component: {this.props.testProp}</div>): 
        (<div>invalid Component</div>);
        return a;
    }
}

export default Person;