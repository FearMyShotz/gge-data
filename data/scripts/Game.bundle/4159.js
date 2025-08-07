Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleUnderworldSeasonRepairBridge() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleUnderworldSeasonRepairBridge.NAME) || this;
  }
  n.__extends(CastleUnderworldSeasonRepairBridge, e);
  CastleUnderworldSeasonRepairBridge.prototype.getPictureClassName = function () {
    return "UnderworldRepairBridgePicture";
  };
  CastleUnderworldSeasonRepairBridge.__initialize_static_members = function () {
    CastleUnderworldSeasonRepairBridge.NAME = "CastleUnderworldRepair";
  };
  return CastleUnderworldSeasonRepairBridge;
}(require("./1079.js").CastleSeasonBaseRepairDialog);
exports.CastleUnderworldSeasonRepairBridge = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();