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
                overflow: "hidden",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor:"#fafafa",
                float: "left",
                transition: "max-height .3s ease"
            },
            "divPreviewInner":{
                height: "auto",
                padding: "0.5rem"
            },
            "divPreviewHeader": {
                width: "100%",
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                //padding: ".5rem 1rem 0 .5rem",
                display: "flex"
            },
            "h2PreviewTitle": {
                width: "95%",
                fontWeight: 400,
                padding: "0rem",
                fontSize: "20px",
                float: "left",
                margin: "0rem"
            },
            "spanPreviewClose": {
                width: "5%",
                fontSize: "20px",
                padding: "0rem"

            },
            "aNullTag": {
                float: "right",
                transform: "scale(1.2,1)",
                color: "#8F9EAB"
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