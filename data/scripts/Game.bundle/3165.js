Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1610.js");
var s = function (e) {
  function WoodResourceFieldVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WoodResourceFieldVE, e);
  Object.defineProperty(WoodResourceFieldVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceFieldVE.prototype, "hasBuildingPlaceHolder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return WoodResourceFieldVE;
}(a.AResourceFieldVE);
exports.WoodResourceFieldVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");