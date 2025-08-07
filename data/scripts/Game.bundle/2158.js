Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function DefaultDetailView(t, i, n, o) {
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(DefaultDetailView, e);
  DefaultDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  DefaultDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
  };
  return DefaultDetailView;
}(require("./162.js").FightDetailView);
exports.DefaultDetailView = a;
o.classImplementsInterfaces(a, "IFightDetailView");