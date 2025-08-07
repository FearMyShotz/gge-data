Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./16.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./928.js");
var d = require("./191.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function ComboboxItemRendererPreset() {
    var t = this;
    t.BTN_WIDTH = 23;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ComboboxItemRendererPreset, e);
  ComboboxItemRendererPreset.prototype.renderItem = function (e, t, i, n, s) {
    var u = this;
    var d = new this.itemMCClass();
    d.actLikeButton = true;
    d.mouseChildren = false;
    d.txt_label.defaultCacheScale = 2;
    var h = e.data;
    if (h.unlocked) {
      d.gotoAndStop(1);
      var g = d.btn_options;
      c.ButtonHelper.initBasicButtons([g]);
      c.ButtonHelper.enableButton(g, l.CastleModel.fightPresetData.multiWaveUnlocked);
      if (l.CastleModel.fightPresetData.multiWaveUnlocked) {
        g.toolTipText = "dialog_troopPreset_changePresetName_tt";
      } else {
        g.toolTipText = "dialog_troopPreset_changePresetName_noSlotPurchased_tt";
      }
      d.mouseChildren = true;
      for (var C = 0; C < d.numChildren; C++) {
        var _ = d.getChildAt(C);
        if (_ != g && _ != d.bg && "mouseEnabled" in _) {
          _.mouseEnabled = false;
        }
        if ("mouseChildren" in _) {
          _.mouseChildren = false;
        }
      }
      g.presetVO = h;
      g.addEventListener(p.CLICK, this.bindFunction(this.handleOptions));
      d.tooltipText = "";
      d.itxt_item = o.GoodgameTextFieldManager.getInstance().registerTextField(d.txt_label, new s(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
      d.itxt_item.color = r.ClientConstColor.FONT_DEFAULT_COLOR;
      d.itxt_item.mouseEnabled = false;
      d.bg.gotoAndStop(1);
      if (i > 0) {
        d.bg.width = i;
        d.itxt_item.width = i - d.comboSeparationItem.width - this.BTN_WIDTH;
        d.comboSeparationItem.x = d.itxt_item.x + d.itxt_item.width + d.comboSeparationItem.width / 2;
        d.btn_options.x = d.comboSeparationItem.x + d.comboSeparationItem.width / 2 + this.BTN_WIDTH / 2;
      }
      d.bg.height = n;
      d.comboSeparationItem.height = d.bg.height;
      d.comboSeparationItem.y = d.bg.y;
      d.btn_options.y = d.bg.y + d.bg.height / 2;
      function m(e) {
        var t = e.clone();
        t.target = e.target.parent;
        d.dispatchEvent(t);
      }
      d.bg.addEventListener(p.MOUSE_UP, m);
      d.bg.addEventListener(p.MOUSE_OVER, m);
      d.bg.addEventListener(p.MOUSE_OUT, m);
      d.bg.addEventListener(p.MOUSE_WHEEL, m);
      function f(e) {
        d.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, f);
        d.bg.removeEventListener(p.MOUSE_UP, m);
        d.bg.removeEventListener(p.MOUSE_OVER, m);
        d.bg.removeEventListener(p.MOUSE_OUT, m);
        d.bg.removeEventListener(p.MOUSE_WHEEL, m);
        g.removeEventListener(p.CLICK, u.bindFunction(u.handleOptions));
      }
      d.addEventListener(createjs.Event.REMOVED_FROM_STAGE, f);
    } else {
      d.gotoAndStop(2);
      d.itxt_item = o.GoodgameTextFieldManager.getInstance().registerTextField(d.txt_label, new s(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
      d.itxt_item.color = ComboboxItemRendererPreset.PRESET_LOCKED_COLOR;
      d.itxt_item.mouseEnabled = false;
      d.tooltipText = "dialog_troopPreset_unlock_header";
      if (i > 0) {
        d.bg.width = i;
        d.itxt_item.width = i - this.BTN_WIDTH;
        d.iconRuby.x = d.bg.x + i - this.BTN_WIDTH / 2;
      }
      d.bg.height = n;
      d.iconRuby.y = d.bg.y + n / 2;
    }
    d.id = t;
    return d;
  };
  ComboboxItemRendererPreset.prototype.handleOptions = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      e.target.parent.dispatchEvent(new u.CastlePresetComboboxItemRendererEvent(u.CastlePresetComboboxItemRendererEvent.OPTIONS, e.target.presetVO));
    }
  };
  Object.defineProperty(ComboboxItemRendererPreset.prototype, "itemMCClass", {
    get: function () {
      return s.getDefinitionByName("CastlePresetComboboxItem_Toaster");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererPreset.PRESET_LOCKED_COLOR = "#EAD0B2";
  return ComboboxItemRendererPreset;
}(d.ComboboxItemRenderer);
exports.ComboboxItemRendererPreset = h;