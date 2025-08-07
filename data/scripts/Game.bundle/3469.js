Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./91.js");
var u = require("./4.js");
var d = require("./68.js");
var p = require("./8.js");
var h = require("./11.js");
var g = require("./3470.js");
var C = function (e) {
  function MightPointRewardDialog() {
    var t = this;
    t._preventHideOnJoinCastle = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, MightPointRewardDialog.NAME) || this;
  }
  n.__extends(MightPointRewardDialog, e);
  MightPointRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("might_reward_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_title, new r.LocalizedTextVO("might_reward_info"));
    this.i_points_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_points.txt_value, new r.LocalizedTextVO("might_reward_amount"));
    this.i_txt_next_reward = this.textFieldManager.registerTextField(this.dialogDisp.txt_next_reward, new r.LocalizedTextVO("might_reward_next"));
    p.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_rewards.btn_down, this.dialogDisp.mc_rewards.btn_up]);
  };
  MightPointRewardDialog.prototype.applyPropertiesLoaded = function (e = null) {
    O.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, u.CastleModel.userData.playerCrest);
    this.dialogDisp.mc_points.txt_value.useFilters(d.BitmapFilterHelper.FILTER_GLOW_MIGHT_POINTS);
    if (this.nextMightRank) {
      this.i_txt_next_reward.textContentVO.textId = "might_reward_next";
      this.i_txt_next_reward.textContentVO.textReplacements = [this.nextMightRank.threshold];
    } else {
      this.i_txt_next_reward.textContentVO.textId = "might_reward_final";
    }
    this.i_points_txt_value.textContentVO.textReplacements = [this.currentMightRank.threshold];
    this._preventHideOnJoinCastle = false;
  };
  MightPointRewardDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this._preventHideOnJoinCastle = false;
          this.hide();
      }
    }
  };
  MightPointRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.mightPointRewardDialogProperties.isLoaded) {
      this.showRewards();
    } else {
      this.hide();
      this.mightPointRewardDialogProperties.isLoaded = true;
      m.CastleDialogHandler.getInstance().registerDefaultDialogs(MightPointRewardDialog, this.mightPointRewardDialogProperties);
    }
  };
  MightPointRewardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.disposeScrollList();
  };
  MightPointRewardDialog.prototype.hide = function () {
    if (!this._preventHideOnJoinCastle) {
      e.prototype.hide.call(this);
      a.MovieClipHelper.stopAllMoviesGotoFrameOne(this.dialogDisp);
    }
  };
  MightPointRewardDialog.prototype.showRewards = function () {
    var e = this.rankRewards;
    this.disposeScrollList();
    this._itemScrollList = new o.ItemScrollList(this.dialogDisp.mc_rewards);
    this._itemScrollList.scrollInstanceName = "i";
    this._itemScrollList.scrollStep = MightPointRewardDialog.MAX_REWARDS;
    this._itemScrollList.scrollItemClass = E.RewardScrollItem;
    for (var t = 0; t < e.length; t++) {
      var i = new g.RewardScrollItemVO(e.getItemByIndex(t));
      this._itemScrollList.pushContent(i);
    }
    this._itemScrollList.initList();
  };
  MightPointRewardDialog.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  Object.defineProperty(MightPointRewardDialog.prototype, "mightPointRewardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightPointRewardDialog.prototype, "currentMightRank", {
    get: function () {
      return u.CastleModel.mightData.getNode(this.mightPointRewardDialogProperties.rankIDs[0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightPointRewardDialog.prototype, "nextMightRank", {
    get: function () {
      return u.CastleModel.mightData.getNode(this.currentMightRank.getId() + 1);
    },
    enumerable: true,
    configurable: true
  });
  MightPointRewardDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onJoinCastle));
  };
  MightPointRewardDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onJoinCastle));
  };
  MightPointRewardDialog.prototype.onJoinCastle = function (e) {
    if (e.params[0] == f.CastleLayoutManager.STATE_ISO) {
      this._preventHideOnJoinCastle = true;
      this.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onJoinCastleFinished));
    }
  };
  MightPointRewardDialog.prototype.onJoinCastleFinished = function (e) {
    if (e.params[0] == f.CastleLayoutManager.STATE_ISO) {
      this.controller.removeEventListener(c.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onJoinCastleFinished));
    }
  };
  Object.defineProperty(MightPointRewardDialog.prototype, "rankRewards", {
    get: function () {
      var e = new _.CollectableList();
      for (var t = l.int(this.mightPointRewardDialogProperties.rankIDs.length), i = 0; i < t; i++) {
        e.addList(u.CastleModel.rewardData.getListById(u.CastleModel.mightData.getNode(this.mightPointRewardDialogProperties.rankIDs[i]).rewardID));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  MightPointRewardDialog.__initialize_static_members = function () {
    MightPointRewardDialog.NAME = "MightPointReward";
    MightPointRewardDialog.MAX_REWARDS = 3;
  };
  return MightPointRewardDialog;
}(h.CastleExternalDialog);
exports.MightPointRewardDialog = C;
var _ = require("./48.js");
var m = require("./9.js");
var f = require("./17.js");
var O = require("./61.js");
var E = require("./3471.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();