(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emotion', 'recompose', '../helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emotion'), require('recompose'), require('../helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emotion, global.recompose, global.helpers);
    global.BarLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emotion, _recompose, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Loader = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var long = (0, _emotion.keyframes)('0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}');

  var short = (0, _emotion.keyframes)('0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}');

  var Loader = exports.Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (i) {
        return (/*#__PURE__*/(0, _emotion.css)('{position:absolute;height:', _this.props.height, 'px;overflow:hidden;background-color:', _this.props.color, ';background-clip:padding-box;display:block;border-radius:2px;will-change:left,right;animation-fill-mode:forwards;animation:', i === 1 ? long : short, ' 2.1s ', i === 2 ? '1.15s' : '', ' ', i === 1 ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)' : 'cubic-bezier(0.165, 0.84, 0.44, 1)', ' infinite;}')
        );
      }, _this.wrapper = function () {
        return (/*#__PURE__*/(0, _emotion.css)('{position:relative;width:', _this.props.width, 'px;height:', _this.props.height, 'px;overflow:hidden;background-color:', (0, _helpers.calculateRgba)(_this.props.color, 0.2), ';background-clip:padding-box;}')
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.style(1) }),
          _react2.default.createElement('div', { className: this.style(2) })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    width: 100,
    height: 4
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'width', 'height'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});