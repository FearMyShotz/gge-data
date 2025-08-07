Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./39.js");
var c = require("./608.js");
var u = require("./140.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleEilandRewardDialog() {
    var t = this;
    t.rewardID = 0;
    t.standardXpos = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleEilandRewardDialog.NAME) || this;
  }
  n.__extends(CastleEilandRewardDialog, e);
  CastleEilandRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forAlliance, new s.LocalizedTextVO("dialog_rankreward_reward_alliance")).autoFitToBounds = true;
    this.dialogDisp.mc_reward.mc_c2.toolTipText = l.ClientConstTextIds.C2;
    this.dialogDisp.mc_reward.mc_c1.toolTipText = l.ClientConstTextIds.C1;
    this.rewards = h.CastleModel.kingdomData.eilandRewards;
    this.standardXpos = this.dialogDisp.mc_reward.mc_multireward_item0.x;
  };
  CastleEilandRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SReadMessagesVO(this.dialogProperties.messageID));
    this.controller.addEventListener(u.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataGet));
  };
  CastleEilandRewardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(u.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataGet));
  };
  CastleEilandRewardDialog.prototype.onMessageDataGet = function (e) {
    this.rewardID = r.int(e.params[0]);
    this.applyReward(this.rewards.getReward(this.rewardID));
  };
  CastleEilandRewardDialog.prototype.applyReward = function (e) {
    this.destroyCollectableRenderList();
    var t = e.rewardList.clone();
    var i = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_decoReward, new _(60, 60));
    var n = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_multireward_item0);
    var o = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_multireward_item1);
    this.collectableRenderList.push(i);
    this.collectableRenderList.push(n);
    this.collectableRenderList.push(o);
    var r = t.getItemByType(f.CollectableEnum.C1);
    var l = t.getItemByType(f.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_c2RewardValue.txt_value, new a.LocalizedNumberVO(l.amount));
    t.removeByItem(l);
    if (e.isTopXReward) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("message_header_eiland_reward_topx", [E.CastleEilandRewardsVO.TOPX_MIN_RANK])).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eilandMessage_reward_topx", [E.CastleEilandRewardsVO.TOPX_MIN_RANK]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("message_header_eiland_reward")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_eilandMessage_reward", [new a.LocalizedNumberVO(e.cargoPointsNeeded)]));
    }
    if (r && r.amount > 0) {
      this.dialogDisp.mc_reward.mc_c1RewardValue.visible = true;
      this.dialogDisp.mc_reward.mc_c1.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_c1RewardValue.txt_value, new a.LocalizedNumberVO(r.amount));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forPlayer, new s.LocalizedTextVO("dialog_rankreward_reward_alliance")).autoFitToBounds = true;
      t.removeByItem(r);
    } else {
      this.dialogDisp.mc_reward.mc_c1RewardValue.visible = false;
      this.dialogDisp.mc_reward.mc_c1.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forPlayer, new s.LocalizedTextVO("dialog_rankreward_reward")).autoFitToBounds = true;
    }
    this.dialogDisp.mc_reward.visible = true;
    n.setVisibility(false);
    o.setVisibility(false);
    i.setVisibility(false);
    if (t.containsType(f.CollectableEnum.BUILDING)) {
      i.updateWithNewVO(t.getItemByType(f.CollectableEnum.BUILDING));
      i.setVisibility(true);
    } else {
      n.clips.itemMc.x = t.length < 2 ? this.standardXpos + CastleEilandRewardDialog.SINGLE_REWARD_OFFSET.x : this.standardXpos;
      var c = t.getItemByIndexSave(0);
      if (c) {
        n.setVisibility(true);
        n.updateWithNewVO(c);
      }
      if (c = t.getItemByIndexSave(1)) {
        o.setVisibility(true);
        o.updateWithNewVO(c);
      }
    }
    this.dialogDisp.mc_reward.deco_background.visible = t.containsType(f.CollectableEnum.BUILDING);
  };
  CastleEilandRewardDialog.prototype.getCustomRewardComponent = function (e, t = null) {
    return new O.CollectableRenderer(new d.CollectableRenderClips(e), new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_DEFAULT, t || CastleEilandRewardDialog.DEFAULT_ICON_DIMENSION));
  };
  CastleEilandRewardDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleEilandRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRewardDialog.__initialize_static_members = function () {
    CastleEilandRewardDialog.NAME = "CastleEilandReward";
    CastleEilandRewardDialog.SINGLE_REWARD_OFFSET = new _(23, 0);
    CastleEilandRewardDialog.DEFAULT_ICON_DIMENSION = new _(40, 40);
  };
  return CastleEilandRewardDialog;
}(C.CastleExternalDialog);
exports.CastleEilandRewardDialog = m;
var f = require("./12.js");
var O = require("./186.js");
var E = require("./668.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();