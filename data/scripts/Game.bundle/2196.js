Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./163.js");
var s = require("./1251.js");
var r = function (e) {
  function DialogLordEffectItemCreator() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(DialogLordEffectItemCreator, e);
  DialogLordEffectItemCreator.prototype.getTotalEffectMC = function (e = null) {
    return new (o.getDefinitionByName("LordEffecTotaltItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getDetailEffectMC = function () {
    return new (o.getDefinitionByName("LordEffectDetailItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    return new (o.getDefinitionByName("LordEffectSeperator_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getCapGroupMC = function () {
    return new (o.getDefinitionByName("LordEffectCapItem_Dialog"))();
  };
  DialogLordEffectItemCreator.prototype.getMargin = function () {
    return DialogLordEffectItemCreator.MARGIN;
  };
  Object.defineProperty(DialogLordEffectItemCreator.prototype, "defaultFontColor", {
    get: function () {
      return DialogLordEffectItemCreator.DEFAULT_FONT_COLOR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ALordEffectItemCreator.prototype, "defaultFontColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DialogLordEffectItemCreator.prototype, "malusFontColor", {
    get: function () {
      return DialogLordEffectItemCreator.MALUS_COLOR_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ALordEffectItemCreator.prototype, "malusFontColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DialogLordEffectItemCreator.__initialize_static_members = function () {
    DialogLordEffectItemCreator.DEFAULT_FONT_COLOR = 15724527;
    DialogLordEffectItemCreator.MALUS_COLOR_0 = 16148070;
    DialogLordEffectItemCreator.MARGIN = new a.LayoutMargin(1, 1, 0, 0);
  };
  return DialogLordEffectItemCreator;
}(s.ALordEffectItemCreator);
exports.DialogLordEffectItemCreator = r;
r.__initialize_static_members();