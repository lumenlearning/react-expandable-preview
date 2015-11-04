export default new class Style {
    constructor(){

        this.style = {
            "ulExpandable": {
                listStyleType: "none",
                width: "100%",
                position: "relative",
                float: "left",
                padding: "0rem",
                margin: "0rem"
            },
            "liExpandable": {
                position: "relative",
                float: "left",
                marginBottom: "1rem"
            },
            "liPreview":{
                position: "relative",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor:"#fafafa",
                float: "left"
            },
            "divPreviewInner":{
                width: "100%",
                height: "auto",
                //maxHeight: "0",
                padding: "0rem"
                //overflow: "hidden",
                //display: "block",
                //transition: "max-height 0.8s"
            },
            "divPreviewHeader": {
                width: "100%",
                padding: ".5rem 1rem 0 .5rem",
                display: "flex"
            },
            "h2PreviewTitle": {
                width: "95%",
                padding: "0rem",

                float: "left",
                margin: "0rem"
            },
            "spanPreviewClose": {
                width: "5%",
                fontWeight: "bolder",
                fontSize: "20px",
                padding: "0rem"

            },
            aNullTag: {
                float: "right"
            },
            "divPreviewContent":{
                width: "100%",
                padding: "0rem"
            }
        };

    }

    styles(){
        return this.style;
    }

    createStyle(name, value){
        if(typeof this.style[name] === 'undefined'){

            this.style[name] = value;

            return true;
        }
        else {
            return false;
        }
    }

    updateStyle(name, value){
        if(typeof this.style[name] !== 'undefined'){
            this.style[name] = value;

            return true;
        }
        else {
            return false;
        }
    }
}