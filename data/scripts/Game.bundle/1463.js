Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = function () {
  function AModel() {
    this.SGN_UPDATE = new n.ObjectSignal();
    this._destroyed = false;
  }
  AModel.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  AModel.prototype._destroy = function () {
    this.SGN_UPDATE.removeAll();
  };
  AModel.prototype.dispatchUpdate = function () {
    this.SGN_UPDATE.signal(this);
  };
  return AModel;
}();
exports.AModel = a;
o.classImplementsInterfaces(a, "IModel");