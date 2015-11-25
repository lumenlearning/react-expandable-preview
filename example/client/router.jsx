//import dependencies.
import  React                       from 'react';
import  ReactDOM                    from 'react-dom';

//import Components
import  Index                       from './components/index.jsx';

export default class ReactRouter{
    constructor(){

    }

    run(){

        ReactDOM.render(<Index  />, document.getElementById("App"));

    }
};

