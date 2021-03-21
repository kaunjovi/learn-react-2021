import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorldApp extends React.Component{
    render(){
        return ( 
            <div>Hello world </div>
            )
    }
}

ReactDOM.render( <HelloWorldApp/> , document.getElementById('helloWorld'))
