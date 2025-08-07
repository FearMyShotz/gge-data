Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./28.js");
var c = require("./3424.js");
var u = require("./21.js");
var d = require("./128.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./30.js");
var C = require("./4.js");
var _ = require("./20.js");
var m = require("./8.js");
var f = require("./25.js");
var O = require("./11.js");
var E = createjs.Point;
var y = function (e) {
  function ConfirmC2Dialog() {
    var t = e.call(this, ConfirmC2Dialog.NAME) || this;
    t.maxShowTime = l.ClientConstTime.MINUTES_2_MILLISEC;
    return t;
  }
  n.__extends(ConfirmC2Dialog, e);
  ConfirmC2Dialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_no], _.ClickFeedbackButtonHover);
    this.cbx_dontShowAgain = new o.CheckBoxButton(this.dialogDisp.cbx_btn, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_purchaseConfirmation_confirmPurchase_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_purchaseConfirmation_confirmPurchase_desc", [C.CastleModel.settingsData.confirmC2Threshold]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_check, new r.LocalizedTextVO("dialog_purchaseConfirmation_dontAskAgain_desc2"));
    var i = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_DEFAULT, new E(130, 130));
    i.tooltip.useAmount = false;
    var n = new p.CollectableRenderClips();
    n.addIconMc(this.dialogDisp.mc_item.mc_item.mc_icon);
    n.addInfoBtn(this.dialogDisp.mc_item.btn_info);
    n.addTextfield(this.dialogDisp.mc_item.mc_item.txt_text);
    n.addTextfieldBgMc(this.dialogDisp.mc_item.mc_item.mc_textBackground);
    f.CollectableRenderHelper.displaySingleItemComplete(this, n, new d.CollectableItemC2VO(this.dialogProperties.c2Amount), i);
    this.showTimestamp = g.CachedTimer.getCachedTimer();
  };
  ConfirmC2Dialog.prototype.addEventListenerOnShow = function () {
    C.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ConfirmC2Dialog.prototype.removeEventListenerOnHide = function () {
    C.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ConfirmC2Dialog.prototype.onTimer = function (e) {
    if (g.CachedTimer.getCachedTimer() - this.showTimestamp >= this.maxShowTime) {
      this.hide();
    }
  };
  ConfirmC2Dialog.prototype.hideLoaded = function (t = null) {
    if (this.cbx_dontShowAgain.isSelected) {
      C.CastleModel.settingsData.confirmC2Threshold = -1;
    }
    e.prototype.hideLoaded.call(this, t);
  };
  ConfirmC2Dialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.onConfirm();
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.cbx_btn:
        this.cbx_dontShowAgain.toggleSelected();
    }
  };
  ConfirmC2Dialog.prototype.onConfirm = function () {
    if (this.dialogProperties.errorVO) {
      var e = new c.C2SConfirmC2VO(this.dialogProperties.errorVO.commandId, this.dialogProperties.errorVO.params[1]);
      a.BasicModel.smartfoxClient.sendCommandVO(e);
    } else if (this.dialogProperties.triggerSignal) {
      if (this.dialogProperties.serverData) {
        this.dialogProperties.triggerSignal.dispatch(this.dialogProperties.serverData);
      } else {
        this.dialogProperties.triggerSignal.dispatch();
      }
    }
    this.hide();
  };
  Object.defineProperty(ConfirmC2Dialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ConfirmC2Dialog.NAME = "ConfirmC2";
  return ConfirmC2Dialog;
}(O.CastleExternalDialog);
exports.ConfirmC2Dialog = y;
s.classImplementsInterfaces(y, "ICollectableRendererList");