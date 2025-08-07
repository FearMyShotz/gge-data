Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./16.js");
var s = require("./24.js");
var r = require("./8.js");
var l = function (e) {
  function ModernComboboxComponentItem(t, i, n, o) {
    var a = e.call(this) || this;
    a._assetClipName = t;
    a._assetFileName = i;
    a._fillContentFunc = n;
    a._data = o;
    return a;
  }
  n.__extends(ModernComboboxComponentItem, e);
  ModernComboboxComponentItem.prototype.init = function () {
    this._dispCreator.init(this.disp);
    r.ButtonHelper.initBasicButton(this.disp, 1);
  };
  ModernComboboxComponentItem.prototype.createDisp = function () {
    this._dispCreator.cacheDisp = false;
    this._dispCreator.addClip(new s.CastleGoodgameExternalClip(this.assetClipName, c.IsoHelper.view.getAssetFileURL(this.assetFileName), null, 0, false));
  };
  ModernComboboxComponentItem.prototype.setHovered = function (e) {
    var t = this.getItemMc();
    if (t.mc_background) {
      t.mc_background.gotoAndStop(e ? 2 : 1);
    }
    if (t.mc_hover) {
      t.mc_hover.visible = e;
    }
    var i = t.txt_text;
    if (i) {
      i.textColor = e ? a.ClientConstColor.MODERN_DEFAULT : a.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    }
  };
  ModernComboboxComponentItem.prototype.onAllClipsLoaded = function () {
    this.setHovered(false);
    if (this._fillContentFunc) {
      this._fillContentFunc(this);
    }
    e.prototype.onAllClipsLoaded.call(this);
  };
  ModernComboboxComponentItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this.isEnabled) {
      this.setHovered(true);
    }
  };
  ModernComboboxComponentItem.prototype.onRollOut = function (t) {
    this.setHovered(false);
    e.prototype.onRollOut.call(this, t);
  };
  ModernComboboxComponentItem.prototype.getItemMc = function () {
    var e = this._dispCreator.firstClip;
    if (e) {
      return e.currentshownDisplayObject;
    } else {
      return null;
    }
  };
  Object.defineProperty(ModernComboboxComponentItem.prototype, "assetClipName", {
    get: function () {
      return this._assetClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernComboboxComponentItem.prototype, "assetFileName", {
    get: function () {
      return this._assetFileName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernComboboxComponentItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  return ModernComboboxComponentItem;
}(require("./2117.js").ASimpleComboboxComponentItem);
exports.ModernComboboxComponentItem = l;
var c = require("./46.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");