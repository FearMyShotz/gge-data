Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./4.js");
var l = function (e) {
  function AdjustSkipBuildingEventVO() {
    return e.call(this) || this;
  }
  n.__extends(AdjustSkipBuildingEventVO, e);
  AdjustSkipBuildingEventVO.prototype.parseParamObject = function (e) {
    this._skipCost = e.CPM;
    this._skipLevel = e.SL;
  };
  AdjustSkipBuildingEventVO.prototype.getSkipCostLevelRange = function (e) {
    for (var t = 0; t < this._skipCost.length; t++) {
      if (e <= this._skipLevel[t]) {
        return s.int(this._skipCost[t]);
      }
    }
    return s.int(a.ConstructionConst.getInstantCostC2PerMinuteFor(r.CastleModel.userData.userLevel));
  };
  return AdjustSkipBuildingEventVO;
}(require("./79.js").ASpecialEventVO);
exports.AdjustSkipBuildingEventVO = l;
o.classImplementsInterfaces(l, "IEventOverviewable");