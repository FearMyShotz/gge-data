Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.EventDispatcher;
var s = createjs.Event;
var r = function (e) {
  function LoadingItem() {
    var t = e.call(this) || this;
    t._isLoaded = false;
    t._errorOccured = false;
    t.errorTryCount = 0;
    t.onLoadingComplete = function (e) {
      t._isLoaded = true;
    };
    t.addEventListener(s.COMPLETE, t.onLoadingComplete);
    return t;
  }
  i.__extends(LoadingItem, e);
  LoadingItem.prototype.onLoadingErrorOccured = function () {
    this._errorOccured = true;
    this.errorTryCount++;
  };
  Object.defineProperty(LoadingItem.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingItem.prototype, "hasLoadingErrorOccured", {
    get: function () {
      return this._errorOccured;
    },
    enumerable: true,
    configurable: true
  });
  return LoadingItem;
}(a);
exports.LoadingItem = r;