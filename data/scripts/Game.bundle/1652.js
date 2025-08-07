Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./188.js");
var s = require("./8.js");
var r = require("./609.js");
var l = require("./1371.js");
var c = function (e) {
  function FactionEventTitlesSublayer(t) {
    var i = e.call(this, t) || this;
    i.subLayerDisp.btn_titleDialog.toolTipText = "gloryTitles_plural";
    s.ButtonHelper.initBasicButton(i.subLayerDisp.btn_titleDialog);
    return i;
  }
  n.__extends(FactionEventTitlesSublayer, e);
  FactionEventTitlesSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.subLayerDisp.btn_titleDialog) {
      u.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(d.CastleTitleMainDialog, new r.CastleTitleMainDialogProperties(a.ClientConstTitle.GLORY_TITLE));
    }
  };
  FactionEventTitlesSublayer.prototype.setUpTitleBarPosition = function (e = null) {
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x = e ? e.x : 0;
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y = e ? e.y : this.titleInfoProgressBarOriginalPosition.y;
  };
  FactionEventTitlesSublayer.prototype.setUpMightInfoPosition = function (e = null) {
    this.subLayerDisp.mc_titleInfo.mc_might.x = e ? e.x : 0;
    this.subLayerDisp.mc_titleInfo.mc_might.y = e ? e.y : this.mightPointsOriginalPosition.y;
  };
  Object.defineProperty(FactionEventTitlesSublayer.prototype, "isSubscriptionActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleTitleSublayer.prototype, "isSubscriptionActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionEventTitlesSublayer;
}(l.CastleTitleSublayer);
exports.FactionEventTitlesSublayer = c;
var u = require("./35.js");
var d = require("./610.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");