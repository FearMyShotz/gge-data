Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./3979.js");
var u = require("./557.js");
var d = require("./67.js");
var p = require("./19.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleActivityBonusDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleActivityBonusDialog.NAME) || this;
  }
  n.__extends(CastleActivityBonusDialog, e);
  CastleActivityBonusDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_activityreward_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_value, new r.LocalizedTextVO("dialog_activityreward_collect"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_activityreward_copy"));
  };
  CastleActivityBonusDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
    h.CastleModel.activityBonusData.addEventListener(u.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onReadyForCollect));
    var i = l.int(h.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus);
    if (i > 0) {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_collect, false);
      this.dialogDisp.btn_collect.toolTipText = {
        t: "dialog_activityBonus_canCollectIn",
        p: [a.TimeStringHelper.getShortTimeStringBySeconds(i, a.TimeStringHelper.TWO_TIME_FORMAT)]
      };
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_collect.basicButton, true);
      this.dialogDisp.btn_collect.toolTipText = "";
    }
  };
  CastleActivityBonusDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    h.CastleModel.activityBonusData.removeEventListener(u.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onReadyForCollect));
  };
  CastleActivityBonusDialog.prototype.updateRewards = function () {
    var e = h.CastleModel.activityBonusData.getNextActivityRewardVO().rewardList;
    f.CollectableRenderHelper.displayMultipleItemsComplete(this, new d.CollectableRenderClipsList(this.dialogDisp, "mc_item"), e, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ICON, new _(38, 38)), null, this.bindFunction(this.afterRenderFunc));
  };
  CastleActivityBonusDialog.prototype.afterRenderFunc = function (e) {
    if (e.itemVO) {
      this.textFieldManager.registerTextField(e.clips.textfield, new r.LocalizedTextVO(o.GenericTextIds.VALUE_MULTIPLIED, [e.itemVO.amount]));
    }
  };
  CastleActivityBonusDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_collect:
          if (h.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus <= 0) {
            h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SOpenActivityChest());
          }
          this.hide();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleActivityBonusDialog.prototype.onReadyForCollect = function (e) {
    g.ButtonHelper.enableButton(this.dialogDisp.btn_collect, true);
  };
  CastleActivityBonusDialog.__initialize_static_members = function () {
    CastleActivityBonusDialog.NAME = "CastleActivityBonus";
  };
  return CastleActivityBonusDialog;
}(C.CastleExternalDialog);
exports.CastleActivityBonusDialog = m;
var f = require("./25.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();