Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1044.js");
var s = function (e) {
  function SoldierMeleeMovementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SoldierMeleeMovementVE, e);
  Object.defineProperty(SoldierMeleeMovementVE.prototype, "assetClipName", {
    get: function () {
      return "Soldier_Melee";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASoldierMovementVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SoldierMeleeMovementVE;
}(a.ASoldierMovementVE);
exports.SoldierMeleeMovementVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");