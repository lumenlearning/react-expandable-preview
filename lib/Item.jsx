import React                    from 'react';
import Preview                  from './Preview.jsx';
import Styles                   from './css/style.js';

import _                        from 'lodash';


export default class Item extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {
            colWidth: this.props.colWidth || 1,
            isOpen: false,
            offsets: null
        };

        //bindings
    }

    render(){
        const styles = Styles.styles();
        const className = "li-expandable";
        const children = React.Children.map(this.props.children, (child, index)=>{

            return React.cloneElement(child, {onClick: (e)=>{e.preventDefault()}});

        });

        var liExpandable = _.merge(styles.liExpandable, {width: this.props.colWidth});

        return(
            <li className={className} onClick={this.props.onClick} data-col-width={this.props.colWidth} style={liExpandable} >
                {children}
            </li>
        );
    }


}