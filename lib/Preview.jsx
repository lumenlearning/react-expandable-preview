"use strict";

import React                from 'react/addons';
import _                    from 'lodash';
import Styles               from './css/style.js';


export default class Preview extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state={
            isOpen: false
        }
    }

    previewStructure(){
        const TransitionGroup   = React.addons.TransitionGroup;

        const that                      = this;
        const styles                    = Styles.styles();
        const styleProp                 = typeof this.props.style !== 'undefined' ? this.props.styles : {};

        var liPreview                   = _.merge(styles.liPreview, styleProp.liPreview || {} );
        var divPreviewInner             = _.merge(styles.divPreviewInner, styleProp.divPreviewInner || {});
        var divPreviewHeader            = _.merge(styles.divPreviewHeader, styleProp.divPreviewHeader || {});
        var h2PreviewTitle              = _.merge(styles.h2PreviewTitle, styleProp.h2PreviewTitle || {});
        var spanPreviewClose            = _.merge(styles.spanPreviewClose, styleProp.spanPreviewClose || {});
        var aNullTag                    = _.merge(styles.aNullTag, styleProp.aNullTag || {});
        var divPreviewContent           = _.merge(styles.divPreviewContent, styleProp.divPreviewContent || {});

        console.log("DIV PREVIEW INNER:", divPreviewInner);

        return(
            <li className="li-preview" style={liPreview}>
                <div className="div-preview-inner" style={divPreviewInner}>
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

    } //previewStructure()

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