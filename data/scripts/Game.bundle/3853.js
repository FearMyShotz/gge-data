Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./928.js");
var l = require("./191.js");
var c = require("./8.js");
var u = createjs.MouseEvent;
var d = function (e) {
  function ComboboxItemRendererAttackDialogPreset() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ComboboxItemRendererAttackDialogPreset, e);
  ComboboxItemRendererAttackDialogPreset.prototype.renderItem = function (e, t, i, n, s) {
    var r = new this.itemMCClass();
    r.actLikeButton = true;
    r.mouseChildren = false;
    r.txt_label_dark.defaultCacheScale = 2;
    r.txt_label_light.defaultCacheScale = 2;
    this.presetVO = e.data;
    r.mc_bg_locked.visible = !this.presetVO.unlocked;
    r.mc_c2.visible = !this.presetVO.unlocked;
    r.mc_bg_selected.visible = false;
    r.itxt_item_light = o.GoodgameTextFieldManager.getInstance().registerTextField(r.txt_label_light, new s(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
    r.itxt_item_dark = o.GoodgameTextFieldManager.getInstance().registerTextField(r.txt_label_dark, new s(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
    r.itxt_item_light.visible = true;
    r.itxt_item_dark.visible = false;
    r.mc_down.visible = false;
    if (this.presetVO.unlocked) {
      r.tooltipText = "";
    } else {
      r.tooltipText = "dialog_troopPreset_unlock_header";
    }
    this.initListener(r);
    r.itxt_item_light.visible = true;
    r.itxt_item_dark.visible = false;
    r.id = t;
    return r;
  };
  ComboboxItemRendererAttackDialogPreset.prototype.initListener = function (e) {
    var t = this;
    e.addEventListener(u.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    e.addEventListener(u.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    e.addEventListener(u.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.addEventListener(u.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    function i(n) {
      e.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, i);
      e.removeEventListener(u.MOUSE_OVER, t.bindFunction(t.onMouseOver));
      e.removeEventListener(u.MOUSE_OUT, t.bindFunction(t.onMouseOut));
      e.removeEventListener(u.MOUSE_UP, t.bindFunction(t.onMouseUp));
      e.removeEventListener(u.MOUSE_DOWN, t.bindFunction(t.onMouseDown));
    }
    e.addEventListener(createjs.Event.REMOVED_FROM_STAGE, i);
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseOver = function (e) {
    e.target.mc_bg_selected.visible = true;
    e.target.itxt_item_light.visible = false;
    e.target.itxt_item_dark.visible = true;
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseOut = function (e) {
    e.target.mc_bg_selected.visible = false;
    e.target.itxt_item_light.visible = true;
    e.target.itxt_item_dark.visible = false;
    if (e.target.mc_down) {
      e.target.mc_down.visible = false;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseDown = function (e) {
    if (e.target.mc_down) {
      e.target.mc_down.visible = true;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.onMouseUp = function (e) {
    if (e.target.mc_down) {
      e.target.mc_down.visible = false;
    }
  };
  ComboboxItemRendererAttackDialogPreset.prototype.handleOptions = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      e.target.parent.dispatchEvent(new r.CastlePresetComboboxItemRendererEvent(r.CastlePresetComboboxItemRendererEvent.OPTIONS, e.target.presetVO));
    }
  };
  Object.defineProperty(ComboboxItemRendererAttackDialogPreset.prototype, "itemMCClass", {
    get: function () {
      return s.getDefinitionByName("Preset_List_Element");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererAttackDialogPreset;
}(l.ComboboxItemRenderer);
exports.ComboboxItemRendererAttackDialogPreset = d;