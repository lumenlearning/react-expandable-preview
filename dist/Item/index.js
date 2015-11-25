'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preview = require('./Preview.jsx');

var _Preview2 = _interopRequireDefault(_Preview);

var _style = require('./css/style.js');

var _style2 = _interopRequireDefault(_style);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props, state) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props, state));

        _this.state = {
            colWidth: _this.props.colWidth || 1,
            isOpen: false,
            offsets: null
        };

        console.log("CONSTRUCT ITEM");

        //bindings
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            console.log("RENDER ITEM");
            var styles = _style2.default.styles();
            var className = "li-expandable";
            /*const children = React.Children.map(this.props.children, (child, index)=>{
                 return React.cloneElement(child, {});
             });*/

            var liExpandable = _lodash2.default.merge(styles.liExpandable, { width: this.props.colWidth });

            return _react2.default.createElement(
                'li',
                { className: className, onClick: this.props.onClick, 'data-col-width': this.props.colWidth, style: liExpandable },
                this.props.children
            );
        }
    }]);

    return Item;
})(_react2.default.Component);

exports.default = Item;