Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./42.js");
var r = require("./8.js");
var l = require("./1759.js");
var c = function (e) {
  function UnlockPrebuiltCastleForFree(t, i) {
    var n = e.call(this, t, i) || this;
    r.ButtonHelper.initBasicButton(n.subLayerDisp.btn_unlock);
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_free, new a.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_detailsDialog_forFree_eyecatcher"));
    n.txt_btn = n.textFieldManager.registerTextField(n.subLayerDisp.btn_unlock.txt_value, new a.LocalizedTextVO(""));
    n.txt_btn.verticalAlign = s.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return n;
  }
  n.__extends(UnlockPrebuiltCastleForFree, e);
  UnlockPrebuiltCastleForFree.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    r.ButtonHelper.enableButton(this.subLayerDisp.btn_unlock, true);
    this.txt_btn.textContentVO.textId = this.unlockButtonTextId;
  };
  Object.defineProperty(UnlockPrebuiltCastleForFree.prototype, "unlockTypeTextId", {
    get: function () {
      return "free";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AUnlockPrebuiltCastle.prototype, "unlockTypeTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForFree.prototype.onClick = function (e) {
    if (e.target == this.subLayerDisp.btn_unlock) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent));
    }
  };
  UnlockPrebuiltCastleForFree.prototype.onUnlockRequestSent = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_unlock);
  };
  return UnlockPrebuiltCastleForFree;
}(l.AUnlockPrebuiltCastle);
exports.UnlockPrebuiltCastleForFree = c;
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");