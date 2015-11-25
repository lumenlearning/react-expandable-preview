'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _style = require('./css/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Expandable = (function (_React$Component) {
    _inherits(Expandable, _React$Component);

    function Expandable(props, state) {
        _classCallCheck(this, Expandable);

        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Expandable).call(this, props, state));

        console.log("INITIATE EXPANDABLE");

        _this4.state = {
            isOpen: false,
            forceClose: false,
            rowIndex: null,
            childIndex: null,
            sItemCount: _this4.props.smallRowItemCount || 1,
            mItemCount: _this4.props.mediumRowItemCount || 2,
            lItemCount: _this4.props.largeRowItemCount || 3,
            xlItemCount: _this4.props.xlargeRowItemCount || 4,
            xxlItemCount: _this4.props.xxlargeRowItemCount || 5,
            beforePreviewOpen: _this4.props.beforePreviewOpen || function () {},
            afterPreviewOpen: _this4.props.afterPreviewOpen || function () {},
            currentItemRowCount: 2
        };

        _this4.handleClick = _this4.handleClick.bind(_this4);
        _this4.handleResize = _this4.handleResize.bind(_this4);
        _this4.getWindowSize = _this4.getWindowSize.bind(_this4);
        _this4.previewCloseCallback = _this4.previewCloseCallback.bind(_this4);
        return _this4;
    }

    _createClass(Expandable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                currentItemRowCount: this.getWindowSize()
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.forceClose && this.state.isOpen) {
                this.closePreview();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var style = _style2.default.styles();
            console.log("PEW PEW");
            var children = this.buildChildren();

            return _react2.default.createElement(
                'ul',
                { className: 'small-12_columns', style: style.ulExpandable },
                children
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.handleResize); //binds window resize event listener
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        //custom functions here.

    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("click");

            if (e.currentTarget.tagName == "LI" && (e.currentTarget.className.indexOf("li-expandable") || e.currentTarget.className == "li-expandable") || e.currentTarget.tagName == "SPAN" && e.currentTarget.className == 'span-preview-close') {

                this.state.isOpen ? this.state.beforePreviewOpen(true) : this.state.beforePreviewOpen(false);

                if (!this.state.isOpen) {
                    //isOpen: false
                    this.setPreviewIndex(e, this.state.isOpen);
                } else if (this.state.isOpen) {
                    //isOpen: true
                    var target = e.currentTarget;

                    if (target.tagName === "SPAN") {
                        //"X" button clicked
                        this.closePreview();
                    } else if (target.tagName === "LI") {
                        //<li> element clicked

                        this.setPreviewIndex(e, this.state.isOpen);
                    } // ./if & ./else if
                }
                this.state.afterPreviewOpen(this.state.isOpen);
            } // ./if span or LI
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            var windowSize = this.getWindowSize();

            if (windowSize !== this.state.currentItemRowCount) {
                this.setState({
                    currentItemRowCount: windowSize
                });
            }
        }
    }, {
        key: 'setPreviewIndex',
        value: function setPreviewIndex(e, isOpen) {
            var _this = this;

            console.log("set preview index", isOpen, this.state.forceClose, this.state.childIndex);
            var target = e.currentTarget;
            var parent = target.parentNode;
            var children = _lodash2.default.toArray(parent.children);

            var total = 0;
            var hasTarget = false;
            var childIndex = -1;

            if (isOpen) {
                children.splice(this.state.rowIndex + 1, 1);
            }

            children.forEach(function (child, index) {
                total++;

                if (child == target && index === _this.state.childIndex && isOpen) {
                    return _this.closePreview();
                }

                if (!hasTarget && child == target) {
                    hasTarget = true;
                    childIndex = index;
                }

                if (total == _this.state.currentItemRowCount && hasTarget || total < _this.state.currentItemRowCount && hasTarget && index == children.length - 1) {
                    return _this.setState({
                        isOpen: true,
                        forceClose: false,
                        rowIndex: index,
                        childIndex: childIndex
                    });
                } else if (total == _this.state.currentItemRowCount) {
                    total = 0;
                }
            }); // ./forEach
        }
    }, {
        key: 'closePreview',
        value: function closePreview() {
            this.setState({
                forceClose: true
            });
        }
    }, {
        key: 'previewCloseCallback',
        value: function previewCloseCallback() {
            var _this2 = this;

            setTimeout(function () {
                _this2.setState({
                    isOpen: false,
                    forceClose: false,
                    index: -1
                });
            }, 300);
        }
    }, {
        key: 'buildChildren',
        value: function buildChildren() {
            var _this3 = this;

            var preview = null;

            var children = _react2.default.Children.map(this.props.children, function (child, index) {
                //calculate child item width
                console.log("child", child);
                var colWidth = 100 / _this3.state.currentItemRowCount + "%";
                var lastComponent = index === _this3.props.children.length - 1 ? true : false;

                var ListComponent = _react2.default.cloneElement(child, {
                    colWidth: colWidth,
                    onClick: _this3.handleClick,
                    lastComponent: lastComponent
                });

                if (index === _this3.state.childIndex) {
                    preview = child.props.previewComponent;
                }

                if (_this3.state.isOpen && index === _this3.state.rowIndex && preview !== null) {
                    var arr = [0, 1];

                    return arr.map(function (arrItem, aIndex) {
                        return aIndex == 0 ? ListComponent : _react2.default.cloneElement(preview, { onClick: _this3.handleClick, isOpen: _this3.state.isOpen, forceClose: _this3.state.forceClose, previewCloseCallback: _this3.previewCloseCallback });
                    });
                }

                return ListComponent;
            });

            return children;
        }
    }, {
        key: 'toArray',
        value: function toArray(list) {
            var arr = [];

            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
            }

            return arr;
        }
    }, {
        key: 'getWindowSize',
        value: function getWindowSize() {
            var windowWidth = window.innerWidth;

            if (windowWidth <= 640) {
                //small
                return this.state.sItemCount;
            } else if (windowWidth <= 1024) {
                //medium
                return this.state.mItemCount;
            } else if (windowWidth <= 1440) {
                //large
                return this.state.lItemCount;
            } else if (windowWidth <= 1920) {
                //extra large
                return this.state.xlItemCount;
            } else if (windowWidth > 1920) {
                //XXL
                return this.state.xxlItemCount;
            }
        }
    }]);

    return Expandable;
})(_react2.default.Component);

exports.default = Expandable;