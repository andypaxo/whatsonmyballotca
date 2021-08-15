"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WhatsOnMyBallotApp = /*#__PURE__*/function (_React$Component) {
  _inherits(WhatsOnMyBallotApp, _React$Component);

  var _super = _createSuper(WhatsOnMyBallotApp);

  function WhatsOnMyBallotApp() {
    var _this;

    _classCallCheck(this, WhatsOnMyBallotApp);

    _this = _super.call(this);
    _this.state = {
      tab: 'whereAmI'
    };

    window.setCityInfo = function (info) {
      return _this.setCityInfo(info);
    };

    return _this;
  }

  _createClass(WhatsOnMyBallotApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _document$location$ha;

      var location = (_document$location$ha = document.location.hash) === null || _document$location$ha === void 0 ? void 0 : _document$location$ha.replace('#', '');

      if (location && location.indexOf('/')) {
        var _location$split = location.split('/'),
            _location$split2 = _slicedToArray(_location$split, 2),
            city = _location$split2[0],
            province = _location$split2[1];

        this.setCityInfo({
          city: city,
          province: province
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this[this.state.tab]());
    }
  }, {
    key: "whereAmI",
    value: function whereAmI() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("form", {
        className: "postcode-form",
        onSubmit: function onSubmit(evt) {
          return _this2.findByPostcode(evt);
        }
      }, /*#__PURE__*/React.createElement("label", {
        className: "label mr-2"
      }, "My postcode is"), /*#__PURE__*/React.createElement("p", {
        className: "control is-expanded mr-2"
      }, /*#__PURE__*/React.createElement("input", {
        className: "input",
        type: "text",
        name: "my postcode",
        required: true,
        onChange: function onChange(evt) {
          return _this2.setState({
            postcode: evt.currentTarget.value
          });
        }
      })), /*#__PURE__*/React.createElement("p", {
        className: "control is-expanded"
      }, /*#__PURE__*/React.createElement("button", {
        className: "button is-success",
        type: "submit"
      }, "Go")));
    }
  }, {
    key: "onMyBallot",
    value: function onMyBallot() {
      return /*#__PURE__*/React.createElement("div", {
        className: "page section"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "title"
      }, "Here's what's on your ballot in ", /*#__PURE__*/React.createElement("span", null, this.state.city)), /*#__PURE__*/React.createElement("div", null, this.state.provincial.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx
        }, /*#__PURE__*/React.createElement("p", null, item.text), /*#__PURE__*/React.createElement("p", {
          className: "description",
          dangerouslySetInnerHTML: {
            __html: item.description
          }
        }), /*#__PURE__*/React.createElement("hr", null));
      })), /*#__PURE__*/React.createElement("div", null, this.state.municipal ? this.state.municipal.length ? this.state.municipal.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx
        }, /*#__PURE__*/React.createElement("p", null, item.text), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, item.description)), /*#__PURE__*/React.createElement("hr", null));
      }) : /*#__PURE__*/React.createElement("p", null, "There's nothing on the ballot specific to ", this.state.city) : /*#__PURE__*/React.createElement("p", null, "We don't have information about specific ballot items for ", this.state.city)));
    }
  }, {
    key: "notFound",
    value: function notFound() {
      return /*#__PURE__*/React.createElement("article", {
        className: "message is-danger mt-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "message-body"
      }, "Sorry, couldn't find your postcode, or you're outside Alberta"));
    }
  }, {
    key: "findByPostcode",
    value: function findByPostcode(evt) {
      evt.preventDefault();
      var postcode = this.state.postcode.toUpperCase().replace(/[^0-9A-Z]/g, '');
      var scriptElem = document.createElement('script');
      scriptElem.setAttribute('src', "https://represent.opennorth.ca/postcodes/".concat(postcode, "?callback=setCityInfo"));
      document.getElementById('jsonp-container').appendChild(scriptElem);
    }
  }, {
    key: "setCityInfo",
    value: function setCityInfo(info) {
      if (!info || info.province !== 'AB') {
        return this.setState({
          tab: 'notFound'
        });
      }

      document.location.hash = "".concat(info.city, "/").concat(info.province);
      var cityInfo = ballotData.municipalities[info.city];
      this.setState({
        tab: 'onMyBallot',
        city: info.city,
        provincial: ballotData.provincial,
        municipal: cityInfo
      });
    }
  }]);

  return WhatsOnMyBallotApp;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(WhatsOnMyBallotApp, null), document.getElementsByClassName('container')[0]);