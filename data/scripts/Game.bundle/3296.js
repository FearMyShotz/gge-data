Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemWarEffortPointsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemWarEffortPointsVE, e);
  Object.defineProperty(CollectableItemWarEffortPointsVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_WarEffortPoints;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemWarEffortPointsVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemWarEffortPointsVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemWarEffortPointsVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  return CollectableItemWarEffortPointsVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemWarEffortPointsVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");