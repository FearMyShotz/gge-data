Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1044.js");
var s = function (e) {
  function FarhatMovementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FarhatMovementVE, e);
  Object.defineProperty(FarhatMovementVE.prototype, "assetClipName", {
    get: function () {
      return "Citizen_Farhat_Classic";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASoldierMovementVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FarhatMovementVE.prototype, "standFrontFrameRange", {
    get: function () {
      return [1, 1];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASoldierMovementVE.prototype, "standFrontFrameRange").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FarhatMovementVE.prototype, "standBackFrameRange", {
    get: function () {
      return [2, 2];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASoldierMovementVE.prototype, "standBackFrameRange").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FarhatMovementVE;
}(a.ASoldierMovementVE);
exports.FarhatMovementVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");