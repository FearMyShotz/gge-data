Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./329.js");
var r = function (e) {
  function ResourcePanelToolTipResourceStone() {
    return e.call(this, c.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE) || this;
  }
  n.__extends(ResourcePanelToolTipResourceStone, e);
  Object.defineProperty(ResourcePanelToolTipResourceStone.prototype, "hunterReduction", {
    get: function () {
      return a.CastleModel.hunterData.woodStoneReduction;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AResourcePanelToolTipResource.prototype, "hunterReduction").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceStone.prototype, "resource", {
    get: function () {
      return l.CollectableEnum.STONE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceStone;
}(s.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceStone = r;
var l = require("./12.js");
var c = require("./152.js");
o.classImplementsInterfaces(r, "Container");