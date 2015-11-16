"use strict";

import React                from 'react/addons';
import _                    from 'lodash';
import Styles               from './css/style.js';


export default class Preview extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state={
            isOpen: this.props.isOpen ? true : false,
            maxHeight: 0,
            overflow: "hidden"
        };

    }

    previewStructure(){
        const that                      = this;
        const styles                    = Styles.styles();
        const styleProp                 = typeof this.props.style !== 'undefined' ? this.props.styles : {};

        var liPreview                   = _.merge(styles.liPreview, (styleProp.liPreview || {}), {maxHeight: this.state.maxHeight, overflow: this.state.overflow} );
        var divPreviewInner             = _.merge(styles.divPreviewInner, styleProp.divPreviewInner || {});
        var divPreviewHeader            = _.merge(styles.divPreviewHeader, styleProp.divPreviewHeader || {});
        var h2PreviewTitle              = _.merge(styles.h2PreviewTitle, styleProp.h2PreviewTitle || {});
        var spanPreviewClose            = _.merge(styles.spanPreviewClose, styleProp.spanPreviewClose || {});
        var aNullTag                    = _.merge(styles.aNullTag, styleProp.aNullTag || {});
        var divPreviewContent           = _.merge(styles.divPreviewContent, styleProp.divPreviewContent || {});

        return(
            <li className="li-preview" ref="preview" style={liPreview}>
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

    render(){
        return this.props.isOpen ? this.previewStructure() : null;
    }

    componentWillReceiveProps(nextProps){
        console.log("receiving props:", nextProps.isOpen, nextProps.forceClose);
        if(nextProps.forceClose && nextProps.isOpen){
            this.setState({
                isOpen: false,
                maxHeight: "0px"
            });
        }
        else if(!nextProps.forceClose){
            this.updateMaxHeight();
        }
    }

    componentDidMount(){
        this.updateMaxHeight();
    }

    componentDidUpdate(){
        if((this.state.isOpen) && (this.state.maxHeight !== this.findMaxHeight())){
            console.log("did update maxHeight", this.state.maxHeight, this.findMaxHeight());
            this.updateMaxHeight();
        }

        this.handlePreviewVisibility(this);

    }

    static handlePreviewVisibility(self){
        if(self.state.isOpen && self.state.maxHeight === 0) {
            self.setState({
                overflow: "visible"
            });
        }
        else if(!self.state.isOpen && self.state.overflow !== 'hidden'){
            self.setState({
                overflow: "hidden"
            });
        }
        else if(!self.state.isOpen && self.state.overflow === 'hidden' && self.props.forceClose){
            self.props.previewCloseCallback();
        }
    }

    componentWillUnmount(){
        console.log("unmounting");
        this.setState({
            isOpen: false,
            maxHeight: 0
        });
    }

    updateMaxHeight(){
        console.log("update maxheight");
        this.setState({
            maxHeight: this.props.isOpen ? this.findMaxHeight() : 0
        });
    }

    findMaxHeight(){
        var previewNode = React.findDOMNode(this.refs.preview);

        return previewNode.scrollHeight + "px";
    }

}