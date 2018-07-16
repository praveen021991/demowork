import React, {Component} from 'react';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('see i am being called!');
        this.valid = true;
        this.validHTML = (<div>valid Component</div>);
        this.invalidHTML = (<div>invalid Component</div>);
    }
    render(){
        var a = this.valid ? 
         this.validHTML: this.invalidHTML;
        return a;
    }
}

export default Person;