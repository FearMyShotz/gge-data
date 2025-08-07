Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./14.js");
var p = createjs.Point;
var h = function (e) {
  function ResourceComponentWithStorageBar(t, i, n = new p(25, 22)) {
    var o = e.call(this) || this;
    o._disp = t;
    o._resource = i;
    o.size = n;
    o.resourceTextfield = d.CastleComponent.textFieldManager.registerTextField(o._disp.txt_text, new r.LocalizedNumberVO(0, true));
    o.updateIcon();
    o._disp.mouseChildren = false;
    return o;
  }
  n.__extends(ResourceComponentWithStorageBar, e);
  ResourceComponentWithStorageBar.prototype.updateIcon = function () {
    var e = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, this.size);
    e.tooltip.useAmount = false;
    C.CollectableRenderHelper.displaySingleItemComplete(this, new c.CollectableRenderClips(this._disp), g.CollectableHelper.createVO(this._resource), e);
  };
  ResourceComponentWithStorageBar.prototype.setValue = function (e, t = -1) {
    this.resourceTextfield.textContentVO.numberValue = e;
    if (t > 0) {
      this._disp.mc_storagebar.visible = true;
      var i = o.MathBase.clamp(e / t, 0, 1);
      this._disp.mc_storagebar.scaleX = i;
      var n = new a.ColorTransform();
      n.color = i == 1 ? l.ClientConstColor.GENERIC_BRIGHT_RED : i >= 0.8 ? l.ClientConstColor.GENERIC_BRIGHT_YELLOW : l.ClientConstColor.GENERIC_LIGHT_GREEN;
      this._disp.mc_storagebar.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
    } else {
      this._disp.mc_storagebar.visible = false;
    }
    this.updateIcon();
  };
  Object.defineProperty(ResourceComponentWithStorageBar.prototype, "resource", {
    set: function (e) {
      this._resource = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceComponentWithStorageBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceComponentWithStorageBar;
}(d.CastleComponent);
exports.ResourceComponentWithStorageBar = h;
var g = require("./45.js");
var C = require("./25.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");