Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3981.js");
var l = require("./558.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleStartupLoginBonusDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStartupLoginBonusDialog.NAME) || this;
  }
  n.__extends(CastleStartupLoginBonusDialog, e);
  CastleStartupLoginBonusDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect0, this.dialogDisp.btn_collect1, this.dialogDisp.btn_collect2, this.dialogDisp.btn_collect3, this.dialogDisp.btn_collect4, this.dialogDisp.btn_collect5, this.dialogDisp.btn_collect6]);
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_registerreward_title"));
    i.autoFitToBounds = true;
    i.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_registerreward_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_loginDays, new s.LocalizedTextVO("dialog_registerreward_days"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new s.LocalizedTextVO("dialog_registerreward_reward"));
  };
  CastleStartupLoginBonusDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    f.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, d.CastleModel.userData.playerCrest);
    f.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, d.CastleModel.userData.playerCrest);
    this.updateRewards();
    d.CastleModel.startUpBonusData.addEventListener(l.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusInfoUpdate));
  };
  CastleStartupLoginBonusDialog.prototype.hideLoaded = function (t = null) {
    d.CastleModel.startUpBonusData.removeEventListener(l.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusInfoUpdate));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleStartupLoginBonusDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    for (var e = 0; e < d.CastleModel.startUpBonusData.startupLoginRewardVOs.length; e++) {
      var t = d.CastleModel.startUpBonusData.startupLoginRewardVOs[e];
      this.textFieldManager.registerTextField(this.dialogDisp["mc_done" + e].txt_label, new s.LocalizedTextVO("dialog_registerreward_collected")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp["txt_day" + e], new s.LocalizedTextVO("dialog_registerreward_day" + (e + 1)));
      this.textFieldManager.registerTextField(this.dialogDisp["btn_collect" + e].txt_value, new s.LocalizedTextVO("dialog_rankreward_message_title")).autoFitToBounds = true;
      this.fillRewardRow(t.rewardList, this.dialogDisp["mc_row" + e]);
      this.setCollectButton(e, t);
    }
  };
  CastleStartupLoginBonusDialog.prototype.fillRewardRow = function (e, t) {
    m.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new c.CollectableRenderClipsList(t, "mc_item").addTextfields("mc_text.txt_text").addTextfieldBgMcs("mc_text"), e, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_STARTUP_LOGIN_BONUS, new g(33, 30)), function preRenderFunc(e) {
      if (e.itemVO) {
        var t = e.getRenderer(u.CollectableRenderOptions.ICON_TRANSFORM);
        switch (e.itemVO.itemType) {
          case _.CollectableEnum.EQUIPMENT_RARENESS:
          case _.CollectableEnum.EQUIPMENT_UNIQUE:
          case _.CollectableEnum.HERO_RANDOM:
            t.transform.offset.y = 5.2;
            t.transform.scale = 1.3;
        }
      }
    });
  };
  CastleStartupLoginBonusDialog.prototype.setCollectButton = function (e, t) {
    if (t.startupLoginBonusRewardID < d.CastleModel.startUpBonusData.nextStartupLoginBonusID || !d.CastleModel.startUpBonusData.hasNextStartupLoginBonus) {
      this.dialogDisp["btn_collect" + e].visible = false;
      this.dialogDisp["mc_done" + e].visible = true;
      this.dialogDisp["btn_collect" + e].toolTipText = "";
    } else if (t.startupLoginBonusRewardID == d.CastleModel.startUpBonusData.nextStartupLoginBonusID && d.CastleModel.startUpBonusData.canCollectBonus) {
      this.dialogDisp["btn_collect" + e].visible = true;
      p.ButtonHelper.enableButton(this.dialogDisp["btn_collect" + e], true);
      this.dialogDisp["btn_collect" + e].toolTipText = "";
      this.dialogDisp["mc_done" + e].visible = false;
    } else {
      this.dialogDisp["btn_collect" + e].visible = true;
      p.ButtonHelper.enableButton(this.dialogDisp["btn_collect" + e], false);
      this.dialogDisp["btn_collect" + e].toolTipText = "dialog_registerreward_inacitvbutton_tooltip";
      this.dialogDisp["mc_done" + e].visible = false;
    }
  };
  CastleStartupLoginBonusDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect0:
        case this.dialogDisp.btn_collect1:
        case this.dialogDisp.btn_collect2:
        case this.dialogDisp.btn_collect3:
        case this.dialogDisp.btn_collect4:
        case this.dialogDisp.btn_collect5:
        case this.dialogDisp.btn_collect6:
          d.CastleModel.smartfoxClient.sendCommandVO(new r.C2SStartupLoginBonusCollectVO());
          t.target.visible = false;
      }
    }
  };
  CastleStartupLoginBonusDialog.prototype.onLoginBonusInfoUpdate = function (e) {
    this.updateRewards();
  };
  CastleStartupLoginBonusDialog.__initialize_static_members = function () {
    CastleStartupLoginBonusDialog.NAME = "CastleStartupLoginBonusV2";
    CastleStartupLoginBonusDialog.MAX_REWARDS_PER_ROW = 6;
  };
  return CastleStartupLoginBonusDialog;
}(h.CastleExternalDialog);
exports.CastleStartupLoginBonusDialog = C;
var _ = require("./12.js");
var m = require("./25.js");
var f = require("./61.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();