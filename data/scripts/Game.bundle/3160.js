Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1045.js");
var s = function (e) {
  function SoldierRangedMovementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SoldierRangedMovementVE, e);
  Object.defineProperty(SoldierRangedMovementVE.prototype, "assetClipName", {
    get: function () {
      return "Soldier_Ranged";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASoldierMovementVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SoldierRangedMovementVE;
}(a.ASoldierMovementVE);
exports.SoldierRangedMovementVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");