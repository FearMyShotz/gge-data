Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./53.js");
var d = require("./13.js");
var p = require("./24.js");
var h = require("./8.js");
var g = function (e) {
  function CastleAllianceBattlegroundStartDialog() {
    return e.call(this, CastleAllianceBattlegroundStartDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattlegroundStartDialog, e);
  CastleAllianceBattlegroundStartDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], m.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundStartDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
    for (var i = 0; i < 3; i++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + i], new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_introduction_section" + (i + 1) + "_title_" + u.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring)));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + i], new l.LocalizedTextVO("dialog_beyondTheHorizon_introduction_section" + (i + 1) + "_desc_" + u.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new l.LocalizedTextVO("dialog_beyondTheHorizon_introduction_line"));
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_background);
    this.dialogDisp.mc_background.addChild(new p.CastleGoodgameExternalClip("CastleAllianceBattleGroundStarterBG_" + u.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(_.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
  };
  CastleAllianceBattlegroundStartDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        C.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_beyondTheHorizon"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleAllianceBattlegroundStartDialog.prototype.onOK = function () {
    if (u.ABGHelper.abgEvent) {
      u.ABGHelper.abgEvent.openDialog();
    }
    this.hide();
  };
  CastleAllianceBattlegroundStartDialog.NAME = "CastleAllianceBattleGroundStarter_ABGTower";
  return CastleAllianceBattlegroundStartDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceBattlegroundStartDialog = g;
var C = require("./9.js");
var _ = require("./249.js");
var m = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");