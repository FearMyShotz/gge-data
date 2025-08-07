Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1609.js");
var s = createjs.Point;
var r = function (e) {
  function StoneResourceFieldVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StoneResourceFieldVE, e);
  StoneResourceFieldVE.prototype.getClipDeltaTilePosByIndex = function (e) {
    return new s(0, this.vo.height * e);
  };
  return StoneResourceFieldVE;
}(a.AExpandingResourceFieldVE);
exports.StoneResourceFieldVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");