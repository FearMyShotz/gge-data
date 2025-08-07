Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./16.js");
var l = require("./85.js");
var c = function (e) {
  function ResourcePanelItem(t) {
    var i = this;
    i._iconFrame = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._disp = new Library.CastleInterfaceElements.ResourcePanelContainer();
    i._disp.mc_icon.gotoAndStop(t);
    i._disp.mouseChildren = false;
    i._iconFrame = t;
    i.isStorageBarVisible = true;
    i._disp.hunterBoostIndicator.visible = false;
    return i;
  }
  n.__extends(ResourcePanelItem, e);
  ResourcePanelItem.prototype.setValue = function (e) {
    if (!this._dispTextValue || !this._dispTextValue.textContentVO || this._dispTextValue.textContentVO.numberValue !== e) {
      var t = 0;
      switch (true) {
        case e < 1000000:
        case e >= 10000000:
          t = 0;
          break;
        default:
          t = 2;
      }
      if (this._dispTextValue && this._dispTextValue.textContentVO) {
        this._dispTextValue.textContentVO.numberValue = e;
      } else {
        this._dispTextValue = o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_value, new l.CastleLocalizedNumberVO(e, {
          compactThreshold: 100000,
          compactFractionalDigits: t
        }, t), new a.InternalGGSTextFieldConfigVO(true));
      }
      this._dispTextValue.autoFitToBounds = true;
    }
  };
  ResourcePanelItem.prototype.setBoostIndicator = function (e, t) {
    this.displayObject.hunterBoostIndicator.visible = e;
    if (t) {
      this.displayObject.hunterBoostIndicator.gotoAndStop(2);
    } else {
      this.displayObject.hunterBoostIndicator.gotoAndStop(1);
    }
  };
  Object.defineProperty(ResourcePanelItem.prototype, "isBoosted", {
    set: function (e) {
      this.displayObject.mc_boosted.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "isValueRed", {
    set: function (e) {
      if (this._dispTextValue && this._dispTextValue.textContentVO) {
        this._dispTextValue.color = e ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "isStorageBarVisible", {
    set: function (e) {
      this.displayObject.mc_storagebar.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelItem.prototype.setStorageBar = function (e) {
    e = parseFloat(e.toFixed(2));
    this.displayObject.mc_storagebar.scaleX = e;
    var t = new s.ColorTransform();
    t.color = e >= 1 ? r.ClientConstColor.GENERIC_BRIGHT_RED : e >= 0.8 ? r.ClientConstColor.GENERIC_BRIGHT_YELLOW : r.ClientConstColor.GENERIC_LIGHT_GREEN;
    this.displayObject.mc_storagebar.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
  };
  Object.defineProperty(ResourcePanelItem.prototype, "iconFrame", {
    get: function () {
      return this._iconFrame;
    },
    set: function (e) {
      this._iconFrame = e;
      this.displayObject.mc_icon.gotoAndStop(this._iconFrame);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "displayObject", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelItem.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    set: function (e) {
      this._resourceType = e;
      this._isResourceContainer = true;
      this.disp.resourceType = this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelItem.prototype.setFrozen = function () {
    this._dispTextValue.color = r.ClientConstColor.FONT_FROZEN;
    var e = new s.ColorTransform();
    e.color = ResourcePanelItem.COLOR_BAR_FROZEN;
    this.displayObject.mc_storagebar.useFilters([new createjs.ColorFilter(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
    this.displayObject.bg.gotoAndStop(2);
  };
  ResourcePanelItem.__initialize_static_members = function () {
    ResourcePanelItem.ICON_FRAME_WOOD = 1;
    ResourcePanelItem.ICON_FRAME_STONE = 2;
    ResourcePanelItem.ICON_FRAME_FOOD = 3;
    ResourcePanelItem.ICON_FRAME_POPULATION = 4;
    ResourcePanelItem.ICON_FRAME_UNITCOUNT = 5;
    ResourcePanelItem.ICON_FRAME_COAL = 6;
    ResourcePanelItem.ICON_FRAME_OLIVEOIL = 7;
    ResourcePanelItem.ICON_FRAME_GLASS = 8;
    ResourcePanelItem.ICON_FRAME_AQUAMARINE = 9;
    ResourcePanelItem.ICON_FRAME_IRON = 11;
    ResourcePanelItem.ICON_FRAME_AUXCOUNT = 12;
    ResourcePanelItem.ICON_FRAME_HONEY = 13;
    ResourcePanelItem.ICON_FRAME_MEAD = 14;
    ResourcePanelItem.ICON_FRAME_BEEF = 17;
  };
  ResourcePanelItem.ICON_FRAME_FOOD_FROZEN = 15;
  ResourcePanelItem.ICON_FRAME_MEAD_FROZEN = 16;
  ResourcePanelItem.ICON_FRAME_BEEF_FROZEN = 18;
  ResourcePanelItem.COLOR_BAR_FROZEN = 2211055;
  return ResourcePanelItem;
}(require("./1816.js").AResourcePanelItem);
exports.ResourcePanelItem = c;
c.__initialize_static_members();