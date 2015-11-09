import React        from 'react';

import Style        from './css/style.js';

export default class Expandable extends React.Component{
    constructor(props, state){
        super(props, state);

        //TODO: change the handleClick to account for window.innerWidth;

        this.state = {
            isOpen: false,
            rowIndex: null,
            childIndex: null,
            colWidth: 2,
            sItemCount: this.props.smallRowItemCount || 1,
            mItemCount: this.props.mediumRowItemCount || 2,
            lItemCount: this.props.largeRowItemCount || 3,
            xlItemCount: this.props.xlargeRowItemCount || 4,
            xxlItemCount: this.props.xxlargeRowItemCount || 5,
            beforePreviewOpen: this.props.beforePreviewOpen || function(){},
            afterPreviewOpen: this.props.afterPreviewOpen || function(){},
            currentItemRowCount: 2,
            settings: {
                current: -1,
                previewPos: -1,
                scrollExtra: 0,
                marginExpanded: 10
            }
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.getWindowSize = this.getWindowSize.bind(this);
    }

    componentWillMount(){
        console.log("window size:", this.getWindowSize(), window.screen.width);

        this.setState({
            currentItemRowCount: this.getWindowSize()
        })
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.colWidth !== this.state.colWidth){
            this.setState({
                colWidth: nextProps.colWidth
            });
        }

        if(nextProps.forceClose && this.state.isOpen){
            this.setState({
                isOpen: false,
                index: -1
            });
        }

    }

    render(){
        var Preview = null;
        var style = Style.styles();

        console.log(this.state.childIndex, this.state.isOpen);

        const children = React.Children.map(this.props.children, (child, index) => {
            //const colWidth = this.getColWidth(this.props.colWidth);
            //calculate child item width
            const colWidth = (100 / this.state.currentItemRowCount) + "%";
            const lastComponent = (index === this.props.children.length - 1 ? true : false);
            const ListComponent = React.cloneElement(child, {
                colWidth: colWidth,
                onClick: this.handleClick,
                lastComponent: lastComponent
            });

            if(index === this.state.childIndex){
                Preview = child.props.previewComponent
            }

            if(this.state.isOpen && (index === this.state.rowIndex) && Preview !== null){
                const arr = [0,1];

                return arr.map((arrItem, aIndex)=>{
                    return aIndex == 0 ? ListComponent : React.cloneElement(Preview, {onClick: this.handleClick, isOpen: true});
                });
            }

            return ListComponent;

        });

        return (
            <ul className="small-12_columns" style={style.ulExpandable}>
                {children}
            </ul>
        )
    }

    handleClick(e) {
        console.log("click", e.currentTarget.tagName, e.currentTarget.className.indexOf("li-expandable"));

        if (((e.currentTarget.tagName == "LI") && (e.currentTarget.className.indexOf("li-expandable") || e.currentTarget.className == "li-expandable") ) || ((e.currentTarget.tagName == "SPAN") && (e.currentTarget.className == 'span-preview-close'))) {


            this.state.isOpen ? this.state.beforePreviewOpen(true) : this.state.beforePreviewOpen(false);

            if (!this.state.isOpen) { //isOpen == false
                console.log("is not open");
                const target = e.currentTarget;
                const parent = target.parentNode;
                const children = this.toArray(parent.children);

                let total = 0;
                let hasTarget = false;
                let childIndex = -1;

                children.forEach((child, index)=> {
                    total ++;
                    console.log("children loop", child, total, this.state.colWidth);

                    if ((!hasTarget) && (child == target)) {
                        console.log("set hasTarget to true");
                        hasTarget = true;
                        childIndex = index;
                    }

                    if ((total == this.state.currentItemRowCount && hasTarget) || (total < this.state.currentItemRowCount && hasTarget && index == (children.length - 1))){
                        console.log("has target & total 12");
                        return this.setState({
                            isOpen: true,
                            rowIndex: index,
                            childIndex: childIndex
                        });
                    }
                    else if (total == this.state.currentItemRowCount) {
                        console.log("reset to 0");
                        total = 0;
                    }

                }); // ./forEach

            }
            else if (this.state.isOpen) {//isOpen true
                console.log("is Open");
                let target = e.currentTarget;

                if (target.tagName === "SPAN") {//"X" button clicked

                    this.setState({
                        isOpen: false,
                        index: -1
                    })

                }
                else if (target.tagName === "LI") {//<li> button clicked
                    const target = e.currentTarget;
                    const parent = target.parentNode;
                    const children = this.toArray(parent.children);

                    let total = 0;
                    let hasTarget = false;
                    let childIndex = -1;

                    children.splice(this.state.rowIndex + 1, 1);

                    children.forEach((child, index)=> {
                        total ++;

                        if ((!hasTarget) && (child == target)) {
                            hasTarget = true;
                            childIndex = index;
                        }

                        if ((total == this.state.currentItemRowCount && hasTarget) || (total < this.state.currentItemRowCount && hasTarget && index == (children.length - 1))) {
                            return this.setState({
                                isOpen: true,
                                rowIndex: index,
                                childIndex: childIndex
                            });
                        }
                        else if (total == this.state.currentItemRowCount) {
                            total = 0;
                        }
                    });

                }// ./if & ./else if

            }

            this.state.afterPreviewOpen(this.state.isOpen);

        }// ./if span or LI

    };

    toArray(list){
        let arr = [];

        for(let i = 0; i < list.length; i++){
            arr.push(list[i]);
        }

        return arr;
    }

    getColWidth(colNum){
        let colWidth;

        switch (colNum){
            case 1:
                colWidth = 12;
            break;
            case 2:
                colWidth = 6;
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
            break;
            default:
                colWidth = 12;
            break;
        }

        return colWidth;
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize); //binds window resize event listener
        //get all list items
            //get offset height and offset top
        //get window height
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e){
        console.log("HANDLE RESIZE", this.getWindowSize());

        this.setState({
            currentItemRowCount: this.getWindowSize()
        });
    }

    getWindowSize(){
        let windowWidth = window.innerWidth;

        console.log(windowWidth);

        if(windowWidth <= 640){
            //set currentItemRowCount to small settings
            return this.state.sItemCount
        }
        else if(windowWidth <= 1024){
            //medium
            return this.state.mItemCount
        }
        else if(windowWidth <= 1440){
            //large
            return this.state.lItemCount
        }
        else if(windowWidth <= 1920){
            //extra large
            return this.state.xlItemCount
        }
        else if(windowWidth > 1920){
            //XXL
            return this.state.xxlItemCount
        }
    }

}