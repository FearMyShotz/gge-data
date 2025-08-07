Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./6.js");
var s = function () {
  function DecorationForgeSelectionListItemVO(e = null, t = false, i = null) {
    this.data = null;
    this.isSelected = false;
    this._fusionXP = 0;
    this.data = e;
    this.isSelected = t;
    this.targetDecoItemVO = i;
    var s = n.castAs(e, "CollectableItemBuildingVO");
    if (s) {
      var r = s.buildingVO;
      var l = i.buildingVO;
      this._fusionXP = a.int(o.FusionConst.getFusionXPFromSource(r.fusionInfoVO.getCurrentLevel(), l.fusionInfoVO.getCurrentLevel()));
    }
  }
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "fusionXP", {
    get: function () {
      return this._fusionXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "collectableBuildingVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "sourceIsFeederDeco", {
    get: function () {
      var e = this.data.buildingVO.fusionInfoVO;
      return e.isFusionSource && !e.isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectionListItemVO;
}();
exports.DecorationForgeSelectionListItemVO = s;