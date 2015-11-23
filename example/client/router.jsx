//import dependencies.
import  React                       from 'react';
import  ReactDOM                    from 'react-dom';
import  {Router, Route, IndexRoute} from 'react-router';

//import Components
import  App                         from './components/app.jsx';
import  Index                       from './components/index.jsx';

export default class ReactRouter{
    constructor(){

    }

    run(){

        ReactDOM.render((
            <Router>
                <Route path="/" component={App} >
                    <IndexRoute component={Index} />
                </Route>
            </Router>
        ), document.getElementById("App"));

    }
};

