Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./18.js");
var a = function (e) {
  function CastleSupportDefenceData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSupportDefenceData, e);
  CastleSupportDefenceData.prototype.parse_SDI = function (e) {
    if (!e) {
      return null;
    }
    var t = new s.CastleSupportDefenceVO();
    t.fillFromParamObject(e);
    t.targetActionType = o.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE;
    return t;
  };
  return CastleSupportDefenceData;
}(require("./72.js").CastleEventDispatcher);
exports.CastleSupportDefenceData = a;
var s = require("./5590.js");