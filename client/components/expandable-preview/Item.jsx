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

    /*componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }*/

    /*static getColWidth(colNum){
        let colWidth;

        switch (colNum){
            case 1:
                colWidth = 12;
            break;
            case 2:
                colWidth = 6;
            break;
            break;
     case 3:
     colWidth = 4;
     break;
     case 4:
     colWidth = 3;
     break;
     case 6:
     colWidth = 2;
     break;
     case 12:
     colWidth = 1;
            default:
                colWidth = 12;
            break;
        }

        return colWidth;
    }*/


}