Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./31.js");
var c = require("./19.js");
var u = function (e) {
  function CastleBookmarkRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBookmarkRewardDialog.NAME) || this;
  }
  n.__extends(CastleBookmarkRewardDialog, e);
  Object.defineProperty(CastleBookmarkRewardDialog.prototype, "customProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_bookmarkIncentive_header"));
  };
  CastleBookmarkRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
    this.dialogDisp.mc_reward_today.toolTipText = "dialog_bookmarkIncentive_currentReward";
    this.dialogDisp.mc_reward_tomorrow.toolTipText = "dialog_bookmarkIncentive_nextReward";
    this.dialogDisp.mc_reward_yesterday.toolTipText = "dialog_bookmarkIncentive_previousReward";
    var i = CastleBookmarkRewardDialog.MAX_INDEX > this.customProperties.dayIndex ? "dialog_bookmarkIncentive_copy" : "dialog_bookmarkIncentive_copyFinal";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(i));
  };
  CastleBookmarkRewardDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    this.setReward(this.customProperties.dayIndex, this.dialogDisp.mc_reward_today);
    this.setReward(this.customProperties.dayIndex + 1, this.dialogDisp.mc_reward_tomorrow);
    this.setReward(this.customProperties.dayIndex - 1, this.dialogDisp.mc_reward_yesterday);
    this.dialogDisp.mc_left_arc.visible = this.customProperties.dayIndex > 0;
    this.dialogDisp.mc_right_arc.visible = this.customProperties.dayIndex < 13;
  };
  CastleBookmarkRewardDialog.prototype.setReward = function (e, t) {
    h.CollectableRenderHelper.displaySingleItem(new l.CollectableRenderClips(t), this.createRewardItem(e), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_ADVANCED)).destroy();
    this.textFieldManager.registerTextField(t.txt_day, new s.LocalizedTextVO("countingDays_day" + (e + 1)));
  };
  CastleBookmarkRewardDialog.prototype.createRewardItem = function (e) {
    var t;
    var i = 0;
    if (a.PlayerConst.LOGIN_LP_INCENTIVES_C1[e] > 0) {
      t = d.CollectableEnum.C1;
      i = r.int(a.PlayerConst.LOGIN_LP_INCENTIVES_C1[e]);
    } else {
      t = d.CollectableEnum.C2;
      i = r.int(a.PlayerConst.LOGIN_LP_INCENTIVES_C2[e]);
    }
    if (i <= 0) {
      return null;
    } else {
      return p.CollectableHelper.createVO(t, i);
    }
  };
  CastleBookmarkRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBookmarkRewardDialog.__initialize_static_members = function () {
    CastleBookmarkRewardDialog.NAME = "CastleBookmarkReward";
    CastleBookmarkRewardDialog.MAX_INDEX = r.int(a.PlayerConst.LOGIN_LP_INCENTIVES_C1.length);
  };
  return CastleBookmarkRewardDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBookmarkRewardDialog = u;
var d = require("./12.js");
var p = require("./45.js");
var h = require("./25.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();