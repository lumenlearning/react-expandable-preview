"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cssStyleJs = require('./css/style.js');

var _cssStyleJs2 = _interopRequireDefault(_cssStyleJs);

var Preview = (function (_React$Component) {
    _inherits(Preview, _React$Component);

    function Preview(props, state) {
        _classCallCheck(this, Preview);

        _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).call(this, props, state);

        this.state = {
            isOpen: this.props.isOpen ? true : false,
            maxHeight: 0,
            overflow: "hidden"
        };
    }

    _createClass(Preview, [{
        key: 'previewStructure',
        value: function previewStructure() {
            var that = this;
            var styles = _cssStyleJs2['default'].styles();
            var styleProp = typeof this.props.style !== 'undefined' ? this.props.styles : {};

            var liPreview = _lodash2['default'].merge(styles.liPreview, styleProp.liPreview || {}, { maxHeight: this.state.maxHeight, overflow: this.state.overflow });
            var divPreviewInner = _lodash2['default'].merge(styles.divPreviewInner, styleProp.divPreviewInner || {});
            var divPreviewHeader = _lodash2['default'].merge(styles.divPreviewHeader, styleProp.divPreviewHeader || {});
            var h2PreviewTitle = _lodash2['default'].merge(styles.h2PreviewTitle, styleProp.h2PreviewTitle || {});
            var spanPreviewClose = _lodash2['default'].merge(styles.spanPreviewClose, styleProp.spanPreviewClose || {});
            var aNullTag = _lodash2['default'].merge(styles.aNullTag, styleProp.aNullTag || {});
            var divPreviewContent = _lodash2['default'].merge(styles.divPreviewContent, styleProp.divPreviewContent || {});

            return _react2['default'].createElement(
                'li',
                { className: 'li-preview', ref: 'preview', style: liPreview },
                _react2['default'].createElement(
                    'div',
                    { className: 'div-preview-inner', style: divPreviewInner },
                    _react2['default'].createElement(
                        'div',
                        { className: 'div-preview-header', style: divPreviewHeader },
                        _react2['default'].createElement(
                            'h2',
                            { className: 'h2-preview-title', style: h2PreviewTitle },
                            that.props.title
                        ),
                        _react2['default'].createElement(
                            'span',
                            { className: 'span-preview-close', style: spanPreviewClose, onClick: this.props.onClick },
                            _react2['default'].createElement(
                                'a',
                                { classname: 'a-null-tag', style: aNullTag },
                                'X'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'div-preview-content', style: divPreviewContent },
                        that.props.children
                    )
                )
            );
        }
        //previewStructure()

    }, {
        key: 'render',
        value: function render() {
            console.log("RENDER PREVIEW");
            return this.props.isOpen ? this.previewStructure() : null;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("receiving props:", nextProps.isOpen, nextProps.forceClose);
            if (nextProps.forceClose && nextProps.isOpen) {
                this.setState({
                    isOpen: false,
                    maxHeight: "0px"
                });
            } else if (!nextProps.forceClose) {
                this.updateMaxHeight();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateMaxHeight();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("did update");
            if (this.state.isOpen && this.state.maxHeight !== this.findMaxHeight()) {
                console.log("did update maxHeight", this.state.maxHeight, this.findMaxHeight());
                this.updateMaxHeight();
            }

            this.handlePreviewVisibility(this);
        }
    }, {
        key: 'handlePreviewVisibility',
        value: function handlePreviewVisibility() {
            console.log("PEW PEW");
            if (this.state.isOpen && this.state.maxHeight === 0) {
                this.setState({
                    overflow: "visible"
                });
            } else if (!this.state.isOpen && this.state.overflow !== 'hidden') {
                this.setState({
                    overflow: "hidden"
                });
            } else if (!this.state.isOpen && this.state.overflow === 'hidden' && this.props.forceClose) {
                this.props.previewCloseCallback();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("unmounting");
            this.setState({
                isOpen: false,
                maxHeight: "0px"
            });
        }
    }, {
        key: 'updateMaxHeight',
        value: function updateMaxHeight() {
            console.log("update maxheight");
            this.setState({
                maxHeight: this.props.isOpen ? this.findMaxHeight() : "0px"
            });
        }
    }, {
        key: 'findMaxHeight',
        value: function findMaxHeight() {
            var previewNode = _reactDom2['default'].findDOMNode(this.refs.preview);

            return previewNode.scrollHeight + "px";
        }
    }]);

    return Preview;
})(_react2['default'].Component);

exports['default'] = Preview;
module.exports = exports['default'];