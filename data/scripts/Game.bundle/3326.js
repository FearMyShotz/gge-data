Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./636.js");
var r = require("./329.js");
var l = function (e) {
  function ResourcePanelToolTipResourceOil() {
    return e.call(this, u.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL) || this;
  }
  n.__extends(ResourcePanelToolTipResourceOil, e);
  Object.defineProperty(ResourcePanelToolTipResourceOil.prototype, "resource", {
    get: function () {
      return c.CollectableEnum.OIL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceOil.prototype, "laboratoryResourceBonus", {
    get: function () {
      return s.CastleLaboratoryEffectHelper.laboratoryResourceBonus(a.WorldDessert.KINGDOM_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceOil;
}(r.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceOil = l;
var c = require("./12.js");
var u = require("./152.js");
o.classImplementsInterfaces(l, "Container");