(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './spinners/BarLoader', './spinners/BounceLoader', './spinners/RingLoader', './spinners/SyncLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./spinners/BarLoader'), require('./spinners/BounceLoader'), require('./spinners/RingLoader'), require('./spinners/SyncLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.BarLoader, global.BounceLoader, global.RingLoader, global.SyncLoader);
    global.index = mod.exports;
  }
})(this, function (module, _BarLoader, _BounceLoader, _RingLoader, _SyncLoader) {
  'use strict';

  var _BarLoader2 = _interopRequireDefault(_BarLoader);

  var _BounceLoader2 = _interopRequireDefault(_BounceLoader);

  var _RingLoader2 = _interopRequireDefault(_RingLoader);

  var _SyncLoader2 = _interopRequireDefault(_SyncLoader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = {
    BarLoader: _BarLoader2.default,
    BounceLoader: _BounceLoader2.default,
    RingLoader: _RingLoader2.default,
    SyncLoader: _SyncLoader2.default
  };
});