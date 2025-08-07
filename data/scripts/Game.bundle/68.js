Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.DropShadowFilter;
var o = createjs.GlowFilter;
var a = function () {
  function BitmapFilterHelper() {}
  BitmapFilterHelper.createLowBrightnessButtonColorMatrixFilter = function () {
    var e = new r.ColorMatrix();
    e.adjustBrightness(-50, -50, -50);
    return [e.filter];
  };
  BitmapFilterHelper.createButtonColorMatrixFilter = function () {
    var e = new s.ButtonColorMatrix();
    e.desaturate();
    return [e.filter];
  };
  BitmapFilterHelper.createColorMatrixFilter = function () {
    var e = new r.ColorMatrix();
    e.desaturate();
    return [e.filter];
  };
  BitmapFilterHelper.setColor = function (e, t) {
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.color = t;
        }
      }
    }
    return e;
  };
  BitmapFilterHelper.__initialize_static_members = function () {
    BitmapFilterHelper.NO_FILTER = [];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_GREEN = [new o(65280, 1, 14, 14, 4)];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_RED = [new o(c.ClientConstColor.GENERIC_BRIGHT_RED, 1, 14, 14, 4)];
    BitmapFilterHelper.FILTER_GLOW_BUILDING_SPARKLE = [new o(16771970, 1, 40, 40, 1.75)];
    BitmapFilterHelper.FILTER_GLOW_DECO_HIGHLIGHT = [new o(3121405, 1, 6, 9, 5.75)];
    BitmapFilterHelper.FILTER_GLOW_KINGDOM_OVERVIEW = [new o(c.ClientConstColor.GENERIC_WHITE, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_COLOSSUS = [new o(c.ClientConstColor.GENERIC_WHITE, 0.8, 40, 20, 3)];
    BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM = [new o(c.ClientConstColor.GENERIC_WHITE, 1, 20, 20, 1)];
    BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT = [new o(11452231, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_ENABLED_GEM_SLOT = BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT;
    BitmapFilterHelper.FILTER_GLOW_PREMIUM_PAYMENT = [new o(16774335, 1, 4.5, 4.5, 2, l.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_CURRENT_RESEARCH = [new o(4243711, 1, 20, 20, 2, l.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_SELECTED_RESEARCH_FILTER = [new o(16774335, 1, 20, 20, 2, l.BitmapFilterQuality.HIGH)];
    BitmapFilterHelper.FILTER_GLOW_ATTACK_ALERT_FRAME = [new o(c.ClientConstColor.ATTACK_ALERT_FRAME_COLOR, 1, 11, 11, 12, l.BitmapFilterQuality.MEDIUM)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS = [new o(c.ClientConstColor.GENERIC_WHITE, 1, 8, 8, 10)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE = [new o(13390647, 1, 4, 4, 100, 1)];
    BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE = [new o(73493285, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT = [new o(0, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_EQUIPMENT_ENCHANTER_HIGHLIGHT_SLOT = BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT;
    BitmapFilterHelper.FILTER_GLOW_CRAFTING_DRAGGED_MOUSE_OVER = [new o(c.ClientConstColor.GENERIC_BRIGHT_YELLOW, 1, 16, 16)];
    BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL = [new o(16766077, 1, 5, 5, 50)];
    BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_LEGENDARY = [new o(15919575, 1, 5, 5, 50), new n(3, 45, c.ClientConstColor.GENERIC_BLACK, 1, 0, 0, 0.35)];
    BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED = [new o(4517444, 0.7, 6, 6)];
    BitmapFilterHelper.FILTER_GLOW_STANDARD = [new o(c.ClientConstColor.GENERIC_WHITE, 1, 20, 20, 100)];
    BitmapFilterHelper.FILTER_GLOW_BLUE = [new o(c.ClientConstColor.GENERIC_BLUE_EFFECT, 1, 4, 4, 100)];
    BitmapFilterHelper.FILTER_GLOW_MIGHT_POINTS = BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL;
    BitmapFilterHelper.FILTER_COLOR_MATRIX = BitmapFilterHelper.createColorMatrixFilter();
    BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX = BitmapFilterHelper.createButtonColorMatrixFilter();
    BitmapFilterHelper.FILTER_BUTTON_COLOR_MATRIX_LOW_BRIGHTNESS = BitmapFilterHelper.createLowBrightnessButtonColorMatrixFilter();
  };
  return BitmapFilterHelper;
}();
exports.BitmapFilterHelper = a;
var s = require("./49.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./16.js");
a.__initialize_static_members();