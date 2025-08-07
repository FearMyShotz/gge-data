Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./7.js");
var _ = require("./1338.js");
var m = require("./102.js");
var f = require("./4.js");
var O = require("./224.js");
var E = require("./938.js");
var y = require("./11.js");
var b = require("./136.js");
var D = function (e) {
  function CastleNewAllianceDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNewAllianceDialog.NAME) || this;
  }
  n.__extends(CastleNewAllianceDialog, e);
  CastleNewAllianceDialog.prototype.initLoaded = function (t = null) {
    G.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_allianceLanguage], V.ClickFeedbackButtonHover);
    G.ButtonHelper.initButtons([this.dialogDisp.btn_openAllianceYes, this.dialogDisp.btn_openAllianceNo], H.TwoStateButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.TextVO(B.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceDescription, new p.LocalizedTextVO("dialog_alliance_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new p.LocalizedTextVO("dialog_alliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLanguage, new p.LocalizedTextVO("dialog_allianceLanguage_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAlliance, new p.LocalizedTextVO("dialog_openAlliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAllianceYes, new p.LocalizedTextVO("commons_yes"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_openAllianceNo, new p.LocalizedTextVO("commons_no"));
    this.dialogDisp.btn_allianceLanguage.toolTipText = "selectlanguage";
    this.dialogDisp.mc_openAllianceHelp.toolTipText = "dialog_alliance_openAlliance_icon_tooltip";
    e.prototype.initLoaded.call(this, t);
  };
  CastleNewAllianceDialog.prototype.showLoaded = function (t = null) {
    this._scrollComponent ||= new w.ModernTextScrollComponent(new x.SimpleScrollVO().initByParent(this.dialogDisp).addVisualElements([this.dialogDisp.scroll_bg]).addMouseWheelElements([this.dialogDisp]), this.dialogDisp.txt_description);
    if (!this.iinput_allianceName) {
      this.iinput_allianceName = this.textFieldManager.registerTextField(this.dialogDisp.input_allianceName, new h.TextVO(d.Localize.text("generic_register_insertName")));
      this.iinput_allianceName.type = l.TextFieldType.INPUT;
      this.iinput_allianceName.maxChars = u.AllianceConst.NAME_MAX_LENGTH;
      this._inputBehaviourName = new F.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_name, this.iinput_allianceName);
    }
    this._messageTextRestrictor ||= new E.CastleJSONTextFieldRestrictor();
    if (!this.iinput_allianceDescription) {
      this.iinput_allianceDescription = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new h.TextVO(d.Localize.text("dialog_alliance_descriptionPreset")));
      this._inputBehaviourDesc = new F.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_description, this.iinput_allianceDescription);
      this.iinput_allianceDescription.type = l.TextFieldType.INPUT;
    }
    this._messageTextRestrictor.init(this.iinput_allianceDescription, u.AllianceConst.DESCRIPTION_MAX_LENGTH);
    this._costListComponent ||= new P.CastleResourceListComponent(this.dialogDisp.allianceCostList, r.getDefinitionByName("NewAllianceCostItem"), 16);
    this._costListComponent.displayAsCosts = true;
    this.controller.addEventListener(m.CastleAllianceDataEvent.ALLIANCE_FOUNDED, this.bindFunction(this.onAllianceFounded));
    this._scrollComponent.scrollToStart();
    this.unLockDialog();
    this._scrollComponent.onShow();
    this._inputBehaviourName.onShow();
    this._inputBehaviourDesc.onShow();
    var i = g.int(f.CastleModel.boostData.premiumAccountVO.isActive ? 0 : f.CastleModel.costsData.getFinalCostsC2(u.AllianceConst.FOUND_COST_C2));
    var n = I.CollectableManager.parser.createGoodsListSave(new A.CollectableItemWoodVO(u.AllianceConst.FOUND_COST_WOOD), new S.CollectableItemStoneVO(u.AllianceConst.FOUND_COST_STONE), new T.CollectableItemC1VO(f.CastleModel.costsData.getFinalCostsC1(u.AllianceConst.FOUND_COST_C1)), new v.CollectableItemC2VO(i));
    this._costListComponent.updateComponent(n, d.Localize.text("dialog_alliance_foundCost"));
    this.setAllianceLanguage(O.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE != "" ? O.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE : U.EnvGlobalsHandler.globals.currentCountryLanguageCode);
    this.openAlliance(true);
    e.prototype.showLoaded.call(this, t);
  };
  CastleNewAllianceDialog.prototype.hideLoaded = function (t = null) {
    this._costListComponent.destroy();
    this._scrollComponent.onHide();
    this._inputBehaviourName.onHide();
    this._inputBehaviourDesc.onHide();
    this.controller.removeEventListener(m.CastleAllianceDataEvent.ALLIANCE_FOUNDED, this.bindFunction(this.onAllianceFounded));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleNewAllianceDialog.prototype.onClick = function (t) {
    if (!this.isLocked) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onCreateNewAlliance();
          break;
        case this.dialogDisp.btn_allianceLanguage:
          L.CastleDialogHandler.getInstance().registerDefaultDialogs(N.AllianceLanguageSelectionDialog, new k.AllianceLanguageSelectionDialogProperties(this.selectedAllianceLanguage, this.bindFunction(this.setAllianceLanguage)));
          break;
        case this.dialogDisp.btn_openAllianceYes:
          this.openAlliance(true);
          break;
        case this.dialogDisp.btn_openAllianceNo:
          this.openAlliance(false);
      }
    }
  };
  CastleNewAllianceDialog.prototype.onAllianceFounded = function (e) {
    this.unLockDialog();
    this.hide();
    L.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleAllianceDialog, new b.CastleAllianceDialogProperties());
  };
  CastleNewAllianceDialog.prototype.onCreateNewAlliance = function () {
    if (this.iinput_allianceName.text == "" || this.iinput_allianceName.text == this._inputBehaviourName.defaultText) {
      L.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_watchout"), d.Localize.text("dialog_alliance_noName")));
    } else if (s.TextValide.isUsernameValide(this.iinput_allianceName.text)) {
      var e = O.CastleAllianceForumData.getForumValidText(this.iinput_allianceDescription.text);
      var t = G.ButtonHelper.isButtonSelected(this.dialogDisp.btn_openAllianceYes);
      this.lockDialog();
      o.BasicController.getInstance().sendCommandVOAndWait(new _.C2SFoundAllianceVO(this.iinput_allianceName.text, e, this.selectedAllianceLanguage, t));
    } else {
      L.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_watchout"), d.Localize.text("alliance_name_invalide")));
    }
  };
  CastleNewAllianceDialog.prototype.checkWaitingAnimState = function (e) {
    if (e == C.ClientConstSF.S2C_FOUND_ALLIANCE) {
      this.unLockDialog();
    }
  };
  CastleNewAllianceDialog.prototype.setAllianceLanguage = function (e) {
    this.selectedAllianceLanguage = e;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceLanguage.txt_selectedLanguage, new p.LocalizedTextVO("language_native_" + this.selectedAllianceLanguage));
  };
  CastleNewAllianceDialog.prototype.openAlliance = function (e) {
    G.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openAllianceYes, e);
    G.ButtonHelper.setButtonSelected(this.dialogDisp.btn_openAllianceNo, !e);
  };
  CastleNewAllianceDialog.NAME = "CastleNewAlliance_W";
  return CastleNewAllianceDialog;
}(y.CastleExternalDialog);
exports.CastleNewAllianceDialog = D;
var I = require("./50.js");
var T = require("./234.js");
var v = require("./128.js");
var S = require("./267.js");
var A = require("./268.js");
var L = require("./9.js");
var P = require("./320.js");
var M = require("./38.js");
var R = require("./125.js");
var V = require("./20.js");
var x = require("./47.js");
var w = require("./745.js");
var B = require("./13.js");
var F = require("./284.js");
var N = require("./953.js");
var k = require("./952.js");
var U = require("./2.js");
var G = require("./8.js");
var H = require("./49.js");
c.classImplementsInterfaces(D, "ICollectableRendererList");