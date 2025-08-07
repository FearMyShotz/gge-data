Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResourcePanelBar(e) {
    this._targetWidth = 0;
    this._currentValue = 0;
    this._disp = e;
    this._disp.mouseChildren = false;
    this._currentValue = 0;
  }
  ResourcePanelBar.prototype.dispose = function () {
    this._disp = null;
  };
  ResourcePanelBar.prototype.setWidth = function (e) {
    this._targetWidth = e;
    this._disp.mc_bar.width = e;
    this.setValue(this._currentValue);
  };
  ResourcePanelBar.prototype.setValue = function (e) {
    this._currentValue = e;
    var t = a.int(e * this._targetWidth - this._targetWidth * 0.5);
    this.disp.mc_arrow.x = o.MathBase.clamp(t, this._targetWidth * -0.5, this._targetWidth * 0.5);
  };
  Object.defineProperty(ResourcePanelBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelBar;
}();
exports.ResourcePanelBar = n;
var o = require("./2.js");
var a = require("./6.js");