Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./39.js");
var s = require("./4.js");
var r = require("./195.js");
var l = function (e) {
  function CollectableItemXpVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemXpVE, e);
  CollectableItemXpVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemXpVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemXpVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByTextId(s.CastleModel.userData.isLegend ? a.ClientConstTextIds.LEGEND_XP : this.vo.getTooltipTextId());
  };
  Object.defineProperty(CollectableItemXpVE.prototype, "iconClass", {
    get: function () {
      if (s.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_XP_Big;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemXpVE;
}(r.ACollectableItemSimpleIconVE);
exports.CollectableItemXpVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");