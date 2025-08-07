Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./8.js");
var s = function (e) {
  function BasicData() {
    var t = e.call(this) || this;
    t._updateData = true;
    t._nextUpdateInterval = 0;
    t._updateInterval = 1000;
    return t;
  }
  i.__extends(BasicData, e);
  Object.defineProperty(BasicData.prototype, "controller", {
    get: function () {
      return a.BasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicData.prototype, "updateInterval", {
    get: function () {
      return this._updateInterval;
    },
    set: function (e) {
      this._updateInterval = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicData.prototype, "updateData", {
    get: function () {
      return this._updateData;
    },
    set: function (e) {
      this._updateData = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicData.prototype.update = function (e) {
    if (e > this._nextUpdateInterval) {
      this._nextUpdateInterval = e + this._updateInterval;
      this.executeUpdate(e);
    }
  };
  BasicData.prototype.executeUpdate = function (e) {};
  BasicData.prototype.destroy = function () {};
  return BasicData;
}(createjs.EventDispatcher);
exports.BasicData = s;