Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./16.js");
var s = require("./4.js");
var r = function (e) {
  function ResourcePanelSublayerButton() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._disp = new Library.CastleInterfaceElements.SpecialResourcePanelButton();
    t._disp.mouseChildren = false;
    t.displayObject.mc_storagebar0.visible = false;
    t.displayObject.mc_storagebar1.visible = false;
    t.displayObject.mc_storagebar2.visible = false;
    t.displayObject.mc_storagebar3.visible = false;
    t.displayObject.mc_boosted.visible = false;
    return t;
  }
  n.__extends(ResourcePanelSublayerButton, e);
  Object.defineProperty(ResourcePanelSublayerButton.prototype, "isBoosted", {
    set: function (e) {
      this.displayObject.mc_boosted.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelSublayerButton.prototype.setResourceBars = function (e) {
    this._visibleResourceBars = [];
    for (var t = 0; t < e.length; t++) {
      if (t <= ResourcePanelSublayerButton.LAST_STORAGE_BAR_INDEX) {
        var i = this._disp["mc_storagebar" + t];
        i.visible = true;
        i.resourceType = e[t];
        this._visibleResourceBars.push(i);
      }
    }
    this.setBarAmounts();
  };
  ResourcePanelSublayerButton.prototype.setBarAmounts = function () {
    if (this._visibleResourceBars != null) {
      for (var e = 0, t = this._visibleResourceBars; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.setStorageBar(i, s.CastleModel.areaData.getActiveStorageItem(i.resourceType).filledInPercent);
        }
      }
    }
  };
  ResourcePanelSublayerButton.prototype.setStorageBar = function (e, t) {
    e.scaleX = t;
    var i = new o.ColorTransform();
    i.color = t == 1 ? a.ClientConstColor.GENERIC_BRIGHT_RED : t >= 0.8 ? a.ClientConstColor.GENERIC_BRIGHT_YELLOW : a.ClientConstColor.GENERIC_LIGHT_GREEN;
    e.useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
  };
  Object.defineProperty(ResourcePanelSublayerButton.prototype, "displayObject", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelSublayerButton.__initialize_static_members = function () {
    ResourcePanelSublayerButton.LAST_STORAGE_BAR_INDEX = 3;
  };
  return ResourcePanelSublayerButton;
}(require("./1816.js").AResourcePanelItem);
exports.ResourcePanelSublayerButton = r;
r.__initialize_static_members();