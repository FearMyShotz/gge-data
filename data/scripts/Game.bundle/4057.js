Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function ASingleController() {
    this._destroyed = false;
  }
  ASingleController.prototype.setModel = function (e) {
    this._model = e;
  };
  ASingleController.prototype.setView = function (e) {
    this._view = e;
  };
  ASingleController.prototype.destroy = function () {
    if (!this._destroyed) {
      this._destroy();
      this._destroyed = true;
    }
  };
  ASingleController.prototype._destroy = function () {
    this._view = null;
    this._model = null;
  };
  return ASingleController;
}();
exports.ASingleController = o;
n.classImplementsInterfaces(o, "IController");