"use strict";

import React                from 'react/addons';
import {Motion, Spring}     from 'react-motion';
import _                    from 'lodash';
import Styles               from './css/style.js';
import ExpandableCss        from './css/expandable.css'


export default class Preview extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state={
            isOpen: false
        }
    }

    previewStructure(){
        console.log("PEW PEW", React.addons);
        const TransitionGroup   = React.addons.TransitionGroup;

        const that                      = this;
        const styles                    = Styles.styles();

        var liPreview                   = styles.liPreview;
        var divPreviewInner             = styles.divPreviewInner;
        var divPreviewHeader            = styles.divPreviewHeader;
        var h2PreviewTitle              = styles.h2PreviewTitle;
        var spanPreviewClose            = styles.spanPreviewClose;
        var aNullTag                    = styles.aNullTag;
        var divPreviewContent           = styles.divPreviewContent;

        var maxHeight = this.state.isOpen ? 400 +"px" : 0 +"px";
        //{maxHeight: maxHeight}

        return(

            <li className="li-preview" style={liPreview}>
                <div className="div-preview-inner" styles={_.merge(divPreviewInner, {})}>
                    <div className="div-preview-header" style={divPreviewHeader}>
                        <h2 className="h2-preview-title" style={h2PreviewTitle}>{that.props.title}</h2>
                        <span className="span-preview-close" style={spanPreviewClose} onClick={this.props.onClick}>
                            <a classname="a-null-tag" style={aNullTag}>X</a>
                        </span>
                    </div>

                    <div className="div-preview-content" style={divPreviewContent}>
                        {that.props.children}
                    </div>
                </div>
            </li>

        )
    }

    //if preview is mounted or updated && open, the scroll to it.
    scrollToPreview(){
        var body = document.body;
        var elem;

    }

    render(){
        return this.props.isOpen ? this.previewStructure() : null;
    }

    componentDidMount(){

        if(this.props.isOpen && !this.state.isOpen){
            this.setState({isOpen: true})
        }
        else if(!this.props.isOpen){
            this.setState({isOpen: false});
        }
    }

    componentDidUpdate(){
        if(this.props.isOpen && !this.state.isOpen){
            this.setState({isOpen: true})
        }
        else if(!this.props.isOpen){
            this.setState({isOpen: false});
        }
    }
}