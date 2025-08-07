Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./329.js");
var s = function (e) {
  function ResourcePanelToolTipResourceAquamarine() {
    return e.call(this, l.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE) || this;
  }
  n.__extends(ResourcePanelToolTipResourceAquamarine, e);
  Object.defineProperty(ResourcePanelToolTipResourceAquamarine.prototype, "resource", {
    get: function () {
      return r.CollectableEnum.AQUAMARINE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourcePanelToolTipResource.prototype, "resource").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceAquamarine;
}(a.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceAquamarine = s;
var r = require("./12.js");
var l = require("./152.js");
o.classImplementsInterfaces(s, "Container");