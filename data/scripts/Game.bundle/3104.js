Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1596.js");
var s = createjs.Point;
var r = function (e) {
  function ResearchtowerBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResearchtowerBuildingVE, e);
  ResearchtowerBuildingVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.statusIcons.setNewOffset(new s(-50, -60));
  };
  Object.defineProperty(ResearchtowerBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Research;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ResearchBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResearchtowerBuildingVE;
}(a.ResearchBuildingVE);
exports.ResearchtowerBuildingVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");