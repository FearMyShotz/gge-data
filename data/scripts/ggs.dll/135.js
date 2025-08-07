Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function LoaderInfo() {
    return e.call(this) || this;
  }
  i.__extends(LoaderInfo, e);
  Object.defineProperty(LoaderInfo.prototype, "content", {
    get: function () {
      return new Object();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderInfo.prototype, "url", {
    get: function () {
      return window.location.origin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderInfo.prototype, "parameters", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  return LoaderInfo;
}(createjs.EventDispatcher);
exports.LoaderInfo = a;