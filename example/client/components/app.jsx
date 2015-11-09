"use strict";
import React            from 'react';
import {Router, Link}   from 'react-router';

//components

export default class App extends React.Component{
    constructor(props, state){
        super(props, state);

    }

    render(){
        return(
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}