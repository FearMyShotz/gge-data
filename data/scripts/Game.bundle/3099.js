Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./24.js");
var c = require("./40.js");
var u = require("./8.js");
var d = createjs.Point;
var p = function (e) {
  function RelicUpgradeDialogSelectorItem(t, i = -1) {
    var n = e.call(this, null, i) || this;
    n._onSelected = new a.Signal(RelicUpgradeDialogSelectorItem);
    n._disp = n._clip.currentshownDisplayObject;
    n._relicVO = t;
    n.init();
    return n;
  }
  n.__extends(RelicUpgradeDialogSelectorItem, e);
  RelicUpgradeDialogSelectorItem.prototype.preConstructorBG = function (e) {
    this._clip = new l.CastleGoodgameExternalClip(RelicUpgradeDialogSelectorItem.ASSET_CLIP_NAME, h.IsoHelper.view.getAssetFileURL(C.RelicUpgradeDialog.NAME));
    this._lordID = e;
  };
  RelicUpgradeDialogSelectorItem.prototype.init = function () {
    u.ButtonHelper.initBasicButton(this.disp, 1.02);
    this.update();
  };
  RelicUpgradeDialogSelectorItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._clip = null;
  };
  RelicUpgradeDialogSelectorItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setSelection(false);
  };
  RelicUpgradeDialogSelectorItem.prototype.update = function () {
    var e = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_BASIC, new d(61, 61));
    e.icon.useFavIcon = true;
    g.CollectableRenderHelper.displaySingleItemComplete(this, new s.CollectableRenderClips(this.disp), this.relicVO, e);
  };
  RelicUpgradeDialogSelectorItem.prototype.setSelection = function (e) {
    this.disp.mc_select.visible = e;
  };
  RelicUpgradeDialogSelectorItem.prototype.isSelected = function () {
    return this.disp.mc_select.visible;
  };
  RelicUpgradeDialogSelectorItem.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      this._onSelected.dispatch(this);
    }
  };
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "relicVO", {
    get: function () {
      return this._relicVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "onSelected", {
    get: function () {
      return this._onSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "filterType", {
    get: function () {
      return this._filterType;
    },
    set: function (e) {
      this._filterType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorItem.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelectorItem.ASSET_CLIP_NAME = "RelicUpgrade_Selection_Item";
  return RelicUpgradeDialogSelectorItem;
}(c.CastleItemRenderer);
exports.RelicUpgradeDialogSelectorItem = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
var h = require("./46.js");
var g = require("./25.js");
var C = require("./797.js");