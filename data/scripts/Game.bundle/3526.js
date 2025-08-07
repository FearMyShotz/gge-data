Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./8.js");
var s = require("./11.js");
var r = require("./36.js");
var l = require("./4.js");
var c = require("./1691.js");
var u = require("./13.js");
var d = function (e) {
  function CastleGenericRewardsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleGenericRewardsDialog.NAME) || this;
  }
  n.__extends(CastleGenericRewardsDialog, e);
  CastleGenericRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    a.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, r.ClickFeedbackButton);
    a.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, r.ClickFeedbackButton);
    this._rewards = new c.CastleGenericRewardsComponent(this.dialogDisp.mc_items);
  };
  CastleGenericRewardsDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.txtTitle))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.LocalizedTextVO(this.dialogProperties.txtCopy));
    this.showRewards();
  };
  CastleGenericRewardsDialog.prototype.showRewards = function () {
    var e;
    this._rewards.onShow();
    if (this.dialogProperties.rewardID != -1) {
      e = l.CastleModel.rewardData.getListById(this.dialogProperties.rewardID);
    }
    if (this.dialogProperties.rewards && this.dialogProperties.rewards.length > 0) {
      if (e) {
        e.addList(this.dialogProperties.rewards);
      } else {
        e = this.dialogProperties.rewards;
      }
    }
    this._rewards.updateWithNewData(e);
  };
  CastleGenericRewardsDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleGenericRewardsDialog.prototype.hideLoaded = function (t = null) {
    this._rewards.onHide();
    this._rewards.destroy();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleGenericRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardsDialog.__initialize_static_members = function () {
    CastleGenericRewardsDialog.NAME = "CastleGenericRewardsDialog";
  };
  return CastleGenericRewardsDialog;
}(s.CastleExternalDialog);
exports.CastleGenericRewardsDialog = d;
d.__initialize_static_members();