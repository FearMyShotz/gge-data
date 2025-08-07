Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./635.js");
var r = require("./329.js");
var l = function (e) {
  function ResourcePanelToolTipResourceIron() {
    return e.call(this, u.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON) || this;
  }
  n.__extends(ResourcePanelToolTipResourceIron, e);
  Object.defineProperty(ResourcePanelToolTipResourceIron.prototype, "resource", {
    get: function () {
      return c.CollectableEnum.IRON;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceIron.prototype, "laboratoryResourceBonus", {
    get: function () {
      return s.CastleLaboratoryEffectHelper.laboratoryResourceBonus(a.WorldClassic.KINGDOM_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceIron;
}(r.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceIron = l;
var c = require("./12.js");
var u = require("./152.js");
o.classImplementsInterfaces(l, "Container");