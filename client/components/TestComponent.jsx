import React                from 'react';
import _                    from 'lodash';
import {Motion, spring}     from 'react-motion';

export default class TestComponent extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {
            isOpen: false,
            index: -1
        };

        //bindinds
        this.handleClick = this.handleClick.bind(this);
        this.removeLI = this.removeLI.bind(this);
    }

    toArray(list){
        let arr = [];

        for(let i = 0; i < list.length; i++){
            arr.push(list[i]);
        }

        return arr;
    }

    handleClick(e){
        console.log("click!");

        const parent = e.target.parentNode;
        const children = this.toArray(parent.children);
        console.log(children);

        /*
         * if isOpen == false:
         *  get parentNode
         *      each <li> in Parent
         *          if data-col-widths add up to 12 && clicked element is there,
         *              insert Preview (define index)
         *              isOpen to true
         *
         * if isOpen == true;
         *  get parentNode
         *      if "X" button clicked
         *          each <li> in parent
         *              find preview (data-col-width == 12) & remove.
         *              reset index to -1 & isOpen to false
         *      if <li> clicked
         *          each <li> in parent
         *              find preview (data-col-width == 12) & remove.
         *              each <li> in parent (now without old preview for proper index)
         *                  if data-col-widths add up to 12 && clicked element is there,
         *                      insert Preview (define index)
         *                      isOpen to true
         */

        if(this.state.isOpen){
            /*children.forEach((child, index)=>{

                if(child.className === "newLI"){
                    console.log("INDEX OF newLI:", index);
                    children.splice(index, 1);
                }

            });*/

            children.splice(this.state.index + 1, 1);

            console.log("newLength:", children);

            /*this.setState({
                isOpen: false,
                index: -1
            })*/
        }

        children.forEach((child, index)=>{

            if(child == e.target){
                this.setState({
                    isOpen: true,
                    index: index
                })
            }
        });

        /*children.forEach((child, index)=>{
            if(child === e.target){

                this.setState({
                    clickedIndex: index
                })
            }
        })*/
    }

    removeLI(){

        this.setState({
            isOpen: false,
            index: -1
        })
    }

    render(){
        console.log("RENDER");
        const that = this;
        const children = React.Children.map(this.props.children, (child, index) => {
            console.log(child.props);
            const Preview = child.props.previewComponent;

            if(this.state.isOpen && index === this.state.index){
                const arr = [0,1];

                return arr.map((arrItem, aIndex)=>{
                    return aIndex == 0 ? React.cloneElement(child, {onClick: this.handleClick}) : React.cloneElement(child.props.previewComponent, {onClick: this.removeLI, isOpen: true});
                });
            }

            return React.cloneElement(child, {onClick: this.handleClick});

        });

        return(
            <ul>
                {children}
            </ul>
        )
    }
}