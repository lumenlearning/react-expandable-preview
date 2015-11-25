"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports["default"] = new ((function () {
    function Style() {
        _classCallCheck(this, Style);

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
            "liPreview": {
                position: "relative",
                overflow: "hidden",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#fafafa",
                float: "left",
                transition: "max-height .3s ease"
            },
            "divPreviewInner": {
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
            "divPreviewContent": {
                width: "100%",
                padding: "0rem"
            }
        };
    }

    _createClass(Style, [{
        key: "styles",
        value: function styles() {
            return this.style;
        }
    }, {
        key: "createStyle",
        value: function createStyle(name, value) {
            if (typeof this.style[name] === 'undefined') {

                this.style[name] = value;

                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "updateStyle",
        value: function updateStyle(name, value) {
            if (typeof this.style[name] !== 'undefined') {
                this.style[name] = value;

                return true;
            } else {
                return false;
            }
        }
    }]);

    return Style;
})())();
module.exports = exports["default"];