Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./243.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleEilandRankingDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEilandRankingDialog.NAME) || this;
  }
  n.__extends(CastleEilandRankingDialog, e);
  CastleEilandRankingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this._subLayer = new Map();
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_RULES, new g.CastleEilandRankingDialogRules(this.dialogDisp.sublayer_rules));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING, new p.CastleEilandRankingDialogAlliance(this.dialogDisp.sublayer_allianceRanking));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING, new h.CastleEilandRankingDialogPlayer(this.dialogDisp.sublayer_playerRanking));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_TITLE, new C.CastleEilandRankingDialogTitle(this.dialogDisp.sublayer_title));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE]]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(""));
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES].toolTipText = "dialog_eiland_tutorial_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING].toolTipText = "dialog_eiland_cargoRanking_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE].toolTipText = "dialog_eiland_titleMenu_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_tooltip";
  };
  CastleEilandRankingDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES].gotoAndStop(1);
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING].gotoAndStop(1);
    var i = this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING];
    i.gotoAndStop(1);
    c.ButtonHelper.enableButton(i, l.CastleModel.allianceData.myAllianceVO != null);
    if (i.enabled) {
      this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_tooltip";
    } else {
      this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_noAlliance_tooltip";
    }
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE].gotoAndStop(1);
    this.switchSublayer(this.dialogProperties.startCategory);
    this.controller.addEventListener(r.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleEilandRankingDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(r.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleEilandRankingDialog.prototype.onEilandReset = function (e) {
    this.hide();
  };
  CastleEilandRankingDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_RULES);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_TITLE);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelpText();
      }
    }
  };
  CastleEilandRankingDialog.prototype.showHelpText = function () {
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
        d.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_eiland_instructionsList"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
        d.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_eiland_allianceRanglist"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        d.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_eiland_membersRanglist"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        d.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_eiland_titleMenu"));
    }
  };
  CastleEilandRankingDialog.prototype.switchSublayer = function (e) {
    var t;
    if (this._currentCategory) {
      this.dialogDisp["btn_" + this._currentCategory].gotoAndStop(1);
    }
    this.dialogDisp["btn_" + e].gotoAndStop(2);
    this.changeCategory(e);
    this.showSublayer(this._subLayer.get(e), []);
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
        t = "dialog_eiland_instructions_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
        t = "dialog_eiland_allianceRanglist_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        t = "dialog_eiland_membersRanglist_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        t = "dialog_eiland_titleMenu_header";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(t)).autoFitToBounds = true;
    this.adjustBackgroundHeight();
  };
  CastleEilandRankingDialog.prototype.adjustBackgroundHeight = function () {
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        this.dialogDisp.mc_background.height = CastleEilandRankingDialog.BACKGROUND_HEIGHT_NORMAL;
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        this.dialogDisp.mc_background.height = CastleEilandRankingDialog.BACKGROUND_HEIGHT_TITLE;
    }
  };
  Object.defineProperty(CastleEilandRankingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialog.__initialize_static_members = function () {
    CastleEilandRankingDialog.NAME = "CastleEilandRanking";
    CastleEilandRankingDialog.SUBLAYER_RULES = "sublayerRules";
    CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING = "sublayerAllianceRanking";
    CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING = "sublayerPlayerRanking";
    CastleEilandRankingDialog.SUBLAYER_TITLE = "sublayerTitle";
    CastleEilandRankingDialog.BACKGROUND_HEIGHT_TITLE = 571.5;
    CastleEilandRankingDialog.BACKGROUND_HEIGHT_NORMAL = 442.1;
  };
  return CastleEilandRankingDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastleEilandRankingDialog = u;
var d = require("./9.js");
var p = require("./3692.js");
var h = require("./3696.js");
var g = require("./3699.js");
var C = require("./3700.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();