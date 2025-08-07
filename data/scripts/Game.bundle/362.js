Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AGachaComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AGachaComponent, e);
  AGachaComponent.prototype.show = function (e) {
    this._params = e;
    this.onShow();
  };
  return AGachaComponent;
}(require("./40.js").CastleItemRenderer);
exports.AGachaComponent = o;