Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./73.js");
var c = require("./191.js");
var u = function (e) {
  function ComboboxItemRendererLord(t = false) {
    var i = this;
    i.useOldAsset = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).useOldAsset = t;
    return i;
  }
  n.__extends(ComboboxItemRendererLord, e);
  ComboboxItemRendererLord.prototype.renderItem = function (e, t, i, n, r) {
    var c = e.data;
    var u = new this.itemMCClass();
    u.actLikeButton = true;
    u.mouseChildren = false;
    u.txt_lordName.defaultCacheScale = 2;
    u.itxt_item = o.GoodgameTextFieldManager.getInstance().registerTextField(u.txt_lordName, c.name, new a.InternalGGSTextFieldConfigVO(true));
    u.itxt_item.mouseEnabled = false;
    if (u.bg) {
      u.bg.gotoAndStop(1);
    }
    s.MovieClipHelper.clearMovieClip(u.mc_featherHolder);
    l.EquipmentIconHelper.addLordFeather(c, u.mc_featherHolder, 0.65);
    if (i > 0) {
      if (u.bg) {
        u.bg.width = i;
      }
      u.itxt_item.width = i - u.comboSeparationItem.width - ComboboxItemRendererLord.FEATHER_WIDTH;
      u.comboSeparationItem.x = u.itxt_item.x + u.itxt_item.width + u.comboSeparationItem.width / 2;
      u.mc_featherHolder.x = u.comboSeparationItem.x + u.comboSeparationItem.width / 2 + ComboboxItemRendererLord.FEATHER_WIDTH / 2;
    }
    if (u.bg) {
      u.bg.height = n;
    }
    u.comboSeparationItem.height = u.bg.height;
    u.comboSeparationItem.y = u.bg.y;
    u.id = t;
    return u;
  };
  Object.defineProperty(ComboboxItemRendererLord.prototype, "itemMCClass", {
    get: function () {
      if (this.useOldAsset) {
        return r.getDefinitionByName("CastleLordComboboxItem_Toaster");
      } else {
        return r.getDefinitionByName("GeneralOverviewLordComboboxItem");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererLord.__initialize_static_members = function () {
    ComboboxItemRendererLord.FEATHER_WIDTH = 25;
  };
  return ComboboxItemRendererLord;
}(c.ComboboxItemRenderer);
exports.ComboboxItemRendererLord = u;
u.__initialize_static_members();