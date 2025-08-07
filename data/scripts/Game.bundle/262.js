Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AResourceProductionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AResourceProductionBuildingVE, e);
  AResourceProductionBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.hasIcon && this.resourceProductionBuildingVO.isOverseerBoosted && this.resourceProductionBuildingVO.buildingState.isFunctionally) {
      this.statusIcons.addIcon(r.IsoStatusIconEnum.BOOSTED);
    }
  };
  Object.defineProperty(AResourceProductionBuildingVE.prototype, "resourceProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new s.RingMenuButtonOverseer());
    return t;
  };
  return AResourceProductionBuildingVE;
}(require("./457.js").AProductionBuildingVE);
exports.AResourceProductionBuildingVE = a;
var s = require("./1559.js");
var r = require("./177.js");
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");