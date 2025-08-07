Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./8.js");
var s = require("./11.js");
var r = require("./36.js");
var l = require("./3467.js");
var c = require("./4.js");
var u = function (e) {
  function CastleMailGiftDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMailGiftDialog.NAME) || this;
  }
  n.__extends(CastleMailGiftDialog, e);
  CastleMailGiftDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    a.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, r.ClickFeedbackButton);
    a.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, r.ClickFeedbackButton);
    this._rewards = new l.CastleMailRewardsComponent(this.dialogDisp.mc_items);
  };
  CastleMailGiftDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this.showRewards();
  };
  CastleMailGiftDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.LocalizedTextVO("dialog_mailGift_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.LocalizedTextVO("dialog_mailGift_copy"));
  };
  CastleMailGiftDialog.prototype.showRewards = function () {
    var e = c.CastleModel.rewardData.getListById(this.dialogProperties.rewardID);
    this._rewards.onShow();
    this._rewards.updateWithNewData(e);
  };
  CastleMailGiftDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleMailGiftDialog.prototype.hideLoaded = function (t = null) {
    this._rewards.onHide();
    this._rewards.destroy();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleMailGiftDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMailGiftDialog.__initialize_static_members = function () {
    CastleMailGiftDialog.NAME = "CastleMailGiftDark";
  };
  return CastleMailGiftDialog;
}(s.CastleExternalDialog);
exports.CastleMailGiftDialog = u;
u.__initialize_static_members();