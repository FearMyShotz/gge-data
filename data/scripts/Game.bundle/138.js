Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./270.js");
var r = require("./418.js");
var l = require("./146.js");
var c = require("./44.js");
var u = require("./4.js");
var d = require("./11.js");
var p = require("./135.js");
var h = require("./107.js");
var g = function (e) {
  function CastleNoMoneyC2Dialog() {
    return e.call(this, CastleNoMoneyC2Dialog.NAME) || this;
  }
  n.__extends(CastleNoMoneyC2Dialog, e);
  CastleNoMoneyC2Dialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons(this.buttons());
  };
  CastleNoMoneyC2Dialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    u.CastleModel.trackingTimer.addTrackingTimer(s.ClientConstTracking.TRACKING_TIME_NORUBIES);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_no_money_title"));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO(c.SpecialServerHelper.checkTextIDForSkinText("dialog_no_money_c2_copy_2")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_moreGold.txt_ruby, new a.LocalizedTextVO("add_Gold"));
    if (this.noMoneyDialogProperties.type == p.CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE) {
      this.itxt_desc.textContentVO.textId = "dialog_no_money_c2_copy_alliance";
    } else {
      this.itxt_desc.textContentVO.textId = c.SpecialServerHelper.checkTextIDForSkinText("dialog_no_money_c2_copy_2");
    }
  };
  CastleNoMoneyC2Dialog.prototype.buttons = function () {
    return [this.dialogDisp.btn_close, this.dialogDisp.btn_moreGold];
  };
  Object.defineProperty(CastleNoMoneyC2Dialog.prototype, "noMoneyDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoMoneyC2Dialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SClientSideTrackingVO(s.ClientConstTracking.TRACKING_TIME_NORUBIES, {
          OT: u.CastleModel.trackingTimer.retrieveTrackingTimeInSeconds(s.ClientConstTracking.TRACKING_TIME_NORUBIES),
          CT: 1
        }));
        this.hide();
        break;
      case this.dialogDisp.btn_moreGold:
        u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SClientSideTrackingVO(s.ClientConstTracking.TRACKING_TIME_NORUBIES, {
          OT: u.CastleModel.trackingTimer.retrieveTrackingTimeInSeconds(s.ClientConstTracking.TRACKING_TIME_NORUBIES),
          CT: 2
        }));
        l.CastleOpenShopExecutor.open(l.CastleOpenShopExecutor.SOURCE_NO_MONEY_C2, h.CXFSourceTrackingConstants.SOURCE_NO_MONEY_C2);
        this.hide();
    }
  };
  CastleNoMoneyC2Dialog.NAME = "CastleNotEnoughRubiesExternal";
  return CastleNoMoneyC2Dialog;
}(d.CastleExternalDialog);
exports.CastleNoMoneyC2Dialog = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");