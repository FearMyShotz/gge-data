Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = function (e) {
  function CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem() {
    var t = this;
    t.isSelected = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem, e);
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.fill = function () {
    if (this.data) {
      var e = this.getItemMc();
      e.actLikeButton = true;
      e.mouseChildren = false;
      s.MovieClipHelper.clearMovieClip(e.mc_icon);
      e.mc_discount.visible = false;
      var t = new r.TextVO(this.preBuilt.getNameText());
      d.CastleComponent.textFieldManager.registerTextField(e.txt_value, t).visible = this.isSelected;
      d.CastleComponent.textFieldManager.registerTextField(e.txt_value_unselected, t).visible = !this.isSelected;
      e.mc_selected.visible = this.isSelected;
      e.mc_unselected.visible = !this.isSelected;
      if (this.type == h.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
        var i = "PreBuildCastleIcon_" + this.preBuilt.preBuiltCastleID + "_" + this.type;
        e.mc_icon.addChild(new a.GoodgameDisplayObjectClipExternal(i, u.IsoHelper.view.getAssetFileURL(i)));
      } else {
        var n = this.type == h.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER ? "_Temp" : "";
        e.mc_icon.addChild(new a.GoodgameDisplayObjectClipExternal("PreBuildCastleIcon_" + this.preBuilt.preBuiltCastleID + n, u.IsoHelper.view.getAssetFileURL(p.CastleSpecialServerPreBuildCastleSelectionDialog.NAME)));
      }
      e.mc_vip.visible = this.preBuilt.costs.getAmountOrDefaultByType(c.CollectableEnum.C2) > 200000;
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "preBuilt", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "index", {
    get: function () {
      if (this.data) {
        return this.data[1];
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "onSelectFunction", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype, "type", {
    get: function () {
      return this.data[3];
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.onClick = function (e) {
    if (!this.isSelected) {
      this.isSelected = true;
      this.fill();
      this.onSelectFunction(this.index);
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.unSelect = function () {
    this.isSelected = false;
    this.fill();
  };
  CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.prototype.select = function () {
    this.isSelected = true;
    this.fill();
  };
  return CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem;
}(require("./81.js").AInfiniteScrollListItem);
exports.CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
var c = require("./12.js");
var u = require("./46.js");
var d = require("./14.js");
var p = require("./752.js");
var h = require("./615.js");