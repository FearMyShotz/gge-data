Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function CastleFactionEventWinBasicDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleFactionEventWinBasicDialog, e);
  CastleFactionEventWinBasicDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleFactionEventWinBasicDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRankingLine();
    this.updateTexts();
    this.updateRewards();
  };
  CastleFactionEventWinBasicDialog.prototype.updateRankingLine = function () {
    this.dialogDisp.mc_first.visible = this.dialogProperties.rank == 1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, this.dialogProperties.rank > 0 ? new a.LocalizedNumberVO(this.dialogProperties.rank) : new r.TextVO("-"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new a.LocalizedNumberVO(this.dialogProperties.points));
  };
  CastleFactionEventWinBasicDialog.prototype.updateTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.TextVO(d.CastleModel.userData.userName));
  };
  CastleFactionEventWinBasicDialog.prototype.setTitleText = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(e));
  };
  CastleFactionEventWinBasicDialog.prototype.setCopyText = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(e));
  };
  CastleFactionEventWinBasicDialog.prototype.updateRewards = function () {
    this.showRightRewardContainer();
    var e = l.int(this.dialogProperties.rewardList.length);
    if (!(e <= 0) && !(e > 4)) {
      C.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this.getRelevantRewardContainer(), "mc_reward"), this.dialogProperties.rewardList, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new h(65, 120)));
    }
  };
  CastleFactionEventWinBasicDialog.prototype.showRightRewardContainer = function () {
    for (var e = 0; e <= 3; ++e) {
      this.dialogDisp["mc_rewardContainer" + e].visible = false;
    }
    this.dialogDisp.mc_noReward.visible = false;
    this.getRelevantRewardContainer().visible = true;
  };
  CastleFactionEventWinBasicDialog.prototype.getRelevantRewardContainer = function () {
    var e = l.int(this.dialogProperties.rewardList.length);
    if (e <= 0 || e > 4) {
      return this.dialogDisp.mc_noReward;
    } else {
      return this.dialogDisp["mc_rewardContainer" + (e - 1)];
    }
  };
  CastleFactionEventWinBasicDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventWinBasicDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionEventWinBasicDialog;
}(p.CastleExternalDialog);
exports.CastleFactionEventWinBasicDialog = g;
var C = require("./25.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");