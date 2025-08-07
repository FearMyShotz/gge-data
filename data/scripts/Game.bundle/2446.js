Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./2447.js");
var h = require("./140.js");
var g = require("./53.js");
var C = require("./4.js");
var _ = require("./8.js");
var m = require("./35.js");
var f = require("./1377.js");
var O = require("./1378.js");
var E = require("./2448.js");
var y = function (e) {
  function CastleAllianceDialogManagement(t) {
    var i = this;
    i.warning = 0;
    i.quitAllianceWarnings = [i.bindFunction(i.firstQuitAllianceWarning), i.bindFunction(i.checkKingsTowerOwnership), i.bindFunction(i.checkCapitalAllianceOwnership), i.bindFunction(i.checkAlliTournament), i.bindFunction(i.checkMonuments), i.bindFunction(i.checkLaboratories)];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._scrollComponent = new A.ModernTextScrollComponent(new L.SimpleScrollVO().initByParent(i.subLayerDisp).addVisualElements([i.subLayerDisp.bg_slider]).addMouseWheelElements([i.subLayerDisp]), i.subLayerDisp.txt_description);
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_name, new u.LocalizedTextVO("dialog_alliance_name"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_descriptionTitle, new u.LocalizedTextVO("dialog_alliance_description"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_language, new u.LocalizedTextVO("dialog_allianceLanguage_name"));
    i.itxt_allianceName = i.textFieldManager.registerTextField(i.subLayerDisp.txt_allianceName, new c.TextVO(""));
    i.itxt_allianceName.autoFitToBounds = true;
    i.itxt_allianceLanguage = i.textFieldManager.registerTextField(i.subLayerDisp.btn_allianceLanguage.txt_selectedLanguage, new u.LocalizedTextVO(""));
    i.subLayerDisp.btn_quitAllance.toolTipText = "dialog_alliance_quitAlliance";
    i.subLayerDisp.btnChangeAllianceSymbol.toolTipText = "dialog_alliance_changeAllianceCrest_tooltip";
    _.ButtonHelper.initButtons([i.subLayerDisp.btn_editName, i.subLayerDisp.btn_editDescription, i.subLayerDisp.btn_quitAllance, i.subLayerDisp.btn_mailToAll, i.subLayerDisp.btnChangeAllianceSymbol, i.subLayerDisp.btn_allianceLanguage], S.ClickFeedbackButtonHover);
    return i;
  }
  n.__extends(CastleAllianceDialogManagement, e);
  CastleAllianceDialogManagement.prototype.onMouseUp = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_editName:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleNameAllianceDialog, new E.CastleNameAllianceDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btn_editDescription:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleChangeDescriptionDialog, new O.CastleChangeDescriptionDialogPrpoerties(this._params[0]));
          break;
        case this.subLayerDisp.btn_quitAllance:
          this.onClickQuitAlliance();
          break;
        case this.subLayerDisp.btn_mailToAll:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleAllianceMessageToAllDialog, new f.CastleAllianceMessageToallDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btnChangeAllianceSymbol:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.AllianceCrestCreationDialog, new f.CastleAllianceMessageToallDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btn_allianceLanguage:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(M.AllianceLanguageSelectionDialog, new P.AllianceLanguageSelectionDialogProperties(this._params[0].allianceLanguage, this.bindFunction(this.onLanguageSelect)));
      }
    }
  };
  CastleAllianceDialogManagement.prototype.onLanguageSelect = function (e) {
    C.CastleModel.smartfoxClient.sendCommandVO(new R.C2SChangeAllianceLanguageVO(e));
  };
  CastleAllianceDialogManagement.prototype.onClickQuitAlliance = function () {
    this.warning = 0;
    this.onNextQuitAllianceWarning();
  };
  CastleAllianceDialogManagement.prototype.onNextQuitAllianceWarning = function (e = null) {
    var t = this.warning++;
    if (t < this.quitAllianceWarnings.length) {
      if (!this.quitAllianceWarnings[t]()) {
        this.onNextQuitAllianceWarning();
      }
    } else {
      this.quitAlliance();
    }
  };
  CastleAllianceDialogManagement.prototype.showQuitAllianceWarning = function (e, t = "dialog_alliance_quitTournament") {
    b.CastleDialogHandler.getInstance().registerDefaultDialogs(V.ModernYesNoBiggerDialog, new s.BasicStandardYesNoDialogProperties(d.Localize.text(t), d.Localize.text(e), this.bindFunction(this.onNextQuitAllianceWarning)));
  };
  CastleAllianceDialogManagement.prototype.firstQuitAllianceWarning = function () {
    this.showQuitAllianceWarning("dialog_alliance_quitAlliance_copy", "dialog_alliance_quitAlliance");
    return true;
  };
  CastleAllianceDialogManagement.prototype.checkKingsTowerOwnership = function () {
    return C.CastleModel.userData.kingstowerList.completeList.length > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_kingstower"), true);
  };
  CastleAllianceDialogManagement.prototype.checkCapitalAllianceOwnership = function () {
    if (C.CastleModel.userData.castleList.getCapital() != null) {
      this.showQuitAllianceWarning("alert_leaveAlliance_capitalLost");
      return true;
    } else {
      return !!C.CastleModel.allianceData.myAllianceVO.landmarksList.hasCapital && (this.showQuitAllianceWarning("alert_leaveAlliance_capitalUnits"), true);
    }
  };
  CastleAllianceDialogManagement.prototype.checkAlliTournament = function () {
    return (!!C.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT) || !!C.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_TOURNAMENT)) && (this.showQuitAllianceWarning("dialog_allaince_quitTournament_copy"), true);
  };
  CastleAllianceDialogManagement.prototype.checkMonuments = function () {
    return C.CastleModel.userData.monumentList.amount > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_monument"), true);
  };
  CastleAllianceDialogManagement.prototype.checkLaboratories = function () {
    return C.CastleModel.userData.laboratoryList.amount > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_laboratory"), true);
  };
  CastleAllianceDialogManagement.prototype.quitAlliance = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceQuitVO());
    this.layoutManager.hideAllDialogs();
  };
  CastleAllianceDialogManagement.prototype.showHelp = function () {
    b.CastleDialogHandler.getInstance().showHelper("", d.Localize.text("help_allianceManagement"));
  };
  CastleAllianceDialogManagement.prototype.show = function (t) {
    this._scrollComponent.onShow();
    e.prototype.show.call(this, t);
    this.itxt_allianceName.textContentVO.stringValue = this.allianceInfoVO.allianceName;
    this.itxt_allianceLanguage.textContentVO.textId = this.allianceInfoVO.allianceLanguage ? "language_native_" + this.allianceInfoVO.allianceLanguage : "dialog_allLanguages_desc";
    this._scrollComponent.setText(a.TextValide.parseChatJSONMessage(this.allianceInfoVO.allianceDescription));
    this._scrollComponent.scrollToStart();
    this.subLayerDisp.btnChangeAllianceSymbol.toolTipText = "dialog_alliance_changeAllianceCrest_tooltip";
    this.initButtons();
    _.ButtonHelper.enableButton(this.subLayerDisp.btnChangeAllianceSymbol, true);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_quitAllance, _.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_quitAllance) && !g.ABGHelper.isOnABGServer);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_editName, _.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editName) && !g.ABGHelper.isOnABGServer);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_allianceLanguage, _.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_allianceLanguage) && !g.ABGHelper.isOnABGServer);
    if (this.subLayerDisp.btn_allianceLanguage.cacheCanvas) {
      this.subLayerDisp.btn_allianceLanguage.updateCache();
    }
    this.controller.addEventListener(h.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    this.updateRestrictions();
  };
  CastleAllianceDialogManagement.prototype.hide = function () {
    this._scrollComponent.onHide();
    this.controller.removeEventListener(h.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    e.prototype.hide.call(this);
  };
  CastleAllianceDialogManagement.prototype.updateRestrictions = function (e = null) {
    var t = this.currentSentMessageToday >= this.limitSendMaxToday;
    var i = !C.CastleModel.allianceData.hasRight(C.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_NEWSLETTER);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_mailToAll, !t && !i);
    this.subLayerDisp.btn_mailToAll.toolTipText = i ? "dialog_alliance_rankToLow" : t ? "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip" : "dialog_alliance_mailToAll";
  };
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "messageRestriction", {
    get: function () {
      return C.CastleModel.messageData.getMessageRestrictionVOByMessageType(r.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "currentSentMessageToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.currentPlayerAmount;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "limitSendMaxToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.dailyLimit;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogManagement.prototype.initButtons = function () {
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_editName, C.CastleModel.allianceData.hasRight(C.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_RENAME));
    if (_.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editName)) {
      this.subLayerDisp.btn_editName.toolTipText = "dialog_alliance_editName";
    } else {
      this.subLayerDisp.btn_editName.toolTipText = "dialog_alliance_rankToLow";
    }
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_editDescription, C.CastleModel.allianceData.hasRight(C.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_DESCRIPTION));
    if (_.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editDescription)) {
      this.subLayerDisp.btn_editDescription.toolTipText = "dialog_alliance_editDescription";
    } else {
      this.subLayerDisp.btn_editDescription.toolTipText = "dialog_alliance_rankToLow";
    }
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_allianceLanguage, C.CastleModel.allianceData.hasRight(C.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_CHANGE_LANGUAGE));
    if (_.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_allianceLanguage)) {
      this.subLayerDisp.btn_allianceLanguage.toolTipText = "selectlanguage";
    } else {
      this.subLayerDisp.btn_allianceLanguage.toolTipText = "dialog_alliance_rankToLow";
    }
  };
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceDialogManagement;
}(m.CastleDialogSubLayer);
exports.CastleAllianceDialogManagement = y;
o.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");
var b = require("./9.js");
var D = require("./1379.js");
var I = require("./2453.js");
var T = require("./2455.js");
var v = require("./2456.js");
var S = require("./20.js");
var A = require("./745.js");
var L = require("./47.js");
var P = require("./952.js");
var M = require("./953.js");
var R = require("./1230.js");
var V = require("./2460.js");