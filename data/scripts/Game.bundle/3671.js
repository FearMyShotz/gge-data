Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./11.js");
var u = createjs.Point;
var d = function (e) {
  function CastleArtifactFoundTreasureDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleArtifactFoundTreasureDialog.NAME) || this;
  }
  n.__extends(CastleArtifactFoundTreasureDialog, e);
  CastleArtifactFoundTreasureDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new r.LocalizedTextVO("value_colon", [s.Localize.text("reward")]));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(""));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(""));
    var i = new u(35, 55);
    this.centeredRewardComponent = new p.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, i);
    this.artifact = new g.ArtifactComponent(this.dialogDisp.mc_artifact);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleArtifactFoundTreasureDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.itxt_title.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_complete_title";
    this.itxt_copy.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_complete_desc";
    h.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, l.CastleModel.userData.playerCrest);
    this.updateRewards();
    this.artifact.init(this.dialogProperties.eventVO, new o.ClipSizeComponent(120, 160));
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.eventVO.skinID);
  };
  CastleArtifactFoundTreasureDialog.prototype.updateRewards = function () {
    var e = this.dialogProperties.eventVO.artifactReward;
    this.centeredRewardComponent.showRewards(e);
  };
  CastleArtifactFoundTreasureDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleArtifactFoundTreasureDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.artifact.onHide();
  };
  Object.defineProperty(CastleArtifactFoundTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactFoundTreasureDialog.__initialize_static_members = function () {
    CastleArtifactFoundTreasureDialog.NAME = "CastleArtifactFinish";
  };
  return CastleArtifactFoundTreasureDialog;
}(c.CastleExternalDialog);
exports.CastleArtifactFoundTreasureDialog = d;
var p = require("./400.js");
var h = require("./61.js");
var g = require("./1749.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();