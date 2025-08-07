Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./67.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleFactionRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionRewardDialog.NAME) || this;
  }
  n.__extends(CastleFactionRewardDialog, e);
  CastleFactionRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleFactionRewardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setupTextIDs();
  };
  CastleFactionRewardDialog.prototype.setupTextIDs = function () {
    this.dialogDisp.mc_threshold.icon_points.toolTipText = "dialog_berimond_nobilityPoints";
    if (this.dialogProperties.isFactionInvasion) {
      if (this.dialogProperties.isAlliance) {
        this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_alliance_gotRoyalRewardAlliancebank_copy" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_alliance_gotTopXRewardAlliancebank_copy" : "dialog_berimondInvasion_alliance_gotRewardAlliancebank_copy";
        this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_alliance_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_alliance_gotTopXReward_title" : "dialog_berimondInvasion_alliance_gotReward_title";
        if (this.dialogProperties.isFirstPrize) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotRoyalReward";
        } else if (this.dialogProperties.isTopX) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotTopXReward";
        } else if (this.dialogProperties.rewardList.grantType < s.RewardConst.ALLIANCE_MEMBER) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotRewardAlliancebank_copy";
        } else {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotReward";
        }
      } else {
        switch (this.dialogProperties.faction) {
          case a.FactionConst.BLUE_FACTION:
            this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_copy" : "dialog_berimond_gotTopxReward_copy";
            this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimond_gotTopxReward_title" : "dialog_berimond_gotReward_title";
            this._mc_message_box_txt_message = "dialog_berimondInvasion_sp_blue_gotReward";
            break;
          case a.FactionConst.RED_FACTION:
            this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_sp_red_gotRoyalReward" : "dialog_berimondInvasion_sp_red_gotTopXReward";
            this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_sp_red_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_sp_red_gotTopXReward_title" : "dialog_berimondInvasion_sp_red_gotReward_title";
            this._mc_message_box_txt_message = "dialog_berimondInvasion_sp_red_gotReward";
        }
      }
    } else {
      this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_copy" : "dialog_berimond_gotTopxReward_copy";
      this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimond_gotTopxReward_title" : "dialog_berimond_gotReward_title";
      this._mc_threshold_txt_copy1 = "dialog_berimond_gotReward_copy1";
      this._mc_threshold_txt_copy2 = "dialog_berimond_gotReward_copy2";
    }
  };
  CastleFactionRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_topx.visible = !this.dialogProperties.isFactionInvasion && (this.dialogProperties.isFirstPrize || this.dialogProperties.isTopX);
    this.dialogDisp.mc_threshold.visible = !this.dialogProperties.isFactionInvasion && !this.dialogProperties.isFirstPrize && !this.dialogProperties.isTopX;
    this.dialogDisp.mc_message_box.visible = this.dialogProperties.isFactionInvasion;
    this.dialogDisp.background.gotoAndStop(this.getBackgroundFrame());
    this.dialogDisp.mc_rewards.gotoAndStop(this.getRewardsFrame());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new l.LocalizedTextVO(this._txt_header)).autoFitToBounds = true;
    if (this.dialogProperties.isFirstPrize || this.dialogProperties.isTopX) {
      this.dialogDisp.mc_topx.mc_color.gotoAndStop(this.dialogProperties.faction * 2 + 1 + (this.dialogProperties.isTopX ? 1 : 0));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_rank, new r.LocalizedNumberVO(this.dialogProperties.ownRank));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_name, new c.TextVO(p.CastleModel.userData.userName));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_title, new l.LocalizedTextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_copy, new l.LocalizedTextVO(this._mc_topx_txt_copy, [this.dialogProperties.points, this.dialogProperties.topXCount]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_copy1, new l.LocalizedTextVO(this._mc_threshold_txt_copy1));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_points, new r.LocalizedNumberVO(this.dialogProperties.points)).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_copy2, new l.LocalizedTextVO(this._mc_threshold_txt_copy2));
    }
    if (this.dialogDisp.mc_message_box.visible) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_message_box.txt_message, new l.LocalizedTextVO(this._mc_message_box_txt_message, [this.dialogProperties.points, this.dialogProperties.topXCount]));
    }
    if (this.dialogProperties.rewardList.length > 0) {
      m.CollectableRenderHelper.displayMultipleItemsComplete(this, new u.CollectableRenderClipsList(this.dialogDisp.mc_rewards, "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewardList, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, CastleFactionRewardDialog.ICON_SIZE));
    }
  };
  CastleFactionRewardDialog.prototype.getRewardsFrame = function () {
    if (this.dialogProperties.isAlliance) {
      return CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE * 2 + this.dialogProperties.rewardList.length + CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET;
    } else {
      return this.dialogProperties.faction * CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE + this.dialogProperties.rewardList.length + CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET;
    }
  };
  CastleFactionRewardDialog.prototype.getBackgroundFrame = function () {
    if (this.dialogProperties.isAlliance) {
      return 3;
    } else {
      return this.dialogProperties.faction + 1;
    }
  };
  CastleFactionRewardDialog.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleFactionRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionRewardDialog.__initialize_static_members = function () {
    CastleFactionRewardDialog.NAME = "CastleFactionReward";
    CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE = 3;
    CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET = 1;
    CastleFactionRewardDialog.ICON_SIZE = new C(100, 100);
  };
  return CastleFactionRewardDialog;
}(g.CastleExternalDialog);
exports.CastleFactionRewardDialog = _;
var m = require("./25.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();