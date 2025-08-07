Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./636.js");
var r = require("./329.js");
var l = function (e) {
  function ResourcePanelToolTipResourceCoal() {
    return e.call(this, u.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL) || this;
  }
  n.__extends(ResourcePanelToolTipResourceCoal, e);
  Object.defineProperty(ResourcePanelToolTipResourceCoal.prototype, "laboratoryResourceBonus", {
    get: function () {
      return s.CastleLaboratoryEffectHelper.laboratoryResourceBonus(a.WorldIce.KINGDOM_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceCoal.prototype, "resource", {
    get: function () {
      return c.CollectableEnum.COAL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceCoal;
}(r.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceCoal = l;
var c = require("./12.js");
var u = require("./152.js");
o.classImplementsInterfaces(l, "Container");