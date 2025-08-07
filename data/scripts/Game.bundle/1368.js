Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./606.js");
var p = require("./1366.js");
var h = require("./21.js");
var g = require("./4.js");
var C = require("./11.js");
var _ = require("./1369.js");
var m = function (e) {
  function CastleReceivedPeaceOfferDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleReceivedPeaceOfferDialog.NAME) || this;
  }
  n.__extends(CastleReceivedPeaceOfferDialog, e);
  CastleReceivedPeaceOfferDialog.prototype.init = function () {
    e.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_accept, this.dialogDisp.btn_decline]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_decline.txt_btntxt, new c.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_DECLINE_OFFER));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accept.txt_btntxt, new c.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER));
  };
  CastleReceivedPeaceOfferDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_accept:
        var i;
        i = this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded > 0 ? l.Localize.text(this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_DEMAND_COPY : CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_OFFER_COPY, [this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded, this.dialogProperties.peaceOfferVO.opposingAllianceName]) : l.Localize.text(CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_NO_TRIBUTE_COPY);
        f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleTimedOKCharacterYesNoOKDialog, new _.CastleTimedOKCharacterYesNoOKDialogProperties(l.Localize.text("generic_alert_watchout"), i, 4, this.bindFunction(this.onAcceptConfirmed), this.bindFunction(this.onAcceptRegret), true, null, 1));
        break;
      case this.dialogDisp.btn_decline:
        g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceRefuseDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID));
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        f.CastleDialogHandler.getInstance().showHelper(l.Localize.text(o.GenericTextIds.COMMON_HELP), l.Localize.text(CastleReceivedPeaceOfferDialog.TEXT_ID_HELP_DIALOG_COPY));
    }
  };
  CastleReceivedPeaceOfferDialog.prototype.onAcceptRegret = function (e = null) {};
  CastleReceivedPeaceOfferDialog.prototype.onAcceptConfirmed = function (e = null) {
    var t = u.int(this.dialogProperties.peaceOfferVO.isDemanded ? -this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded : this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded);
    g.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceChangeDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID, s.AllianceConst.DIPLOMACY_NEUTRAL, t));
    this.hide();
  };
  CastleReceivedPeaceOfferDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    g.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferTimerUpdate));
    this._acceptDeadline = this.dialogProperties.peaceOfferVO.endTimestamp;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_COPY, [this.dialogProperties.peaceOfferVO.opposingAllianceName, l.Localize.datetime(this._acceptDeadline, r.DateTimeStyle.LONG, r.DateTimeStyle.SHORT)]));
    var i = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_DEMAND : CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_OFFER;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_conditions, new c.LocalizedTextVO(i, [this.dialogProperties.peaceOfferVO.opposingAllianceName]));
    this.dialogProperties.peaceOfferVO.isDemanded;
    var n = CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accept.txt_btntxt, new c.LocalizedTextVO(n));
    var o = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_DEMANDED_TRIBUTE : CastleReceivedPeaceOfferDialog.TEXT_ID_OFFERED_TRIBUTE;
    this.textFieldManager.registerTextField(this.dialogDisp.tribute, new c.LocalizedTextVO(o));
    var a = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_DEMANDED : CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_OFFERED;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_demand_or_offer, new c.LocalizedTextVO(a));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_acceptanceTime, new c.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPTANCE_TIME, [l.Localize.datetime(this._acceptDeadline, r.DateTimeStyle.LONG, r.DateTimeStyle.SHORT)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_tribute.txt_tributepercentage, new c.LocalizedTextVO("value_percentage", [this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded]));
    var s = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_OFFERED : CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_DEMANDED;
    this.dialogDisp.mc_tribute.toolTipText = l.Localize.text(s);
    this.dialogDisp.mc_demand_or_offer.toolTipText = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_DEMAND : CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_OFFERED;
    this.dialogDisp.mc_tribute.mouseChildren = false;
    this.dialogDisp.mc_demand_or_offer.gotoAndStop(this.dialogProperties.peaceOfferVO.isDemanded ? 1 : 2);
    this.disableButtonsForSeconds([this.dialogDisp.btn_accept, this.dialogDisp.btn_decline]);
  };
  CastleReceivedPeaceOfferDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    g.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferTimerUpdate));
  };
  CastleReceivedPeaceOfferDialog.prototype.onPeaceOfferTimerUpdate = function (e) {
    if (this.dialogProperties.peaceOfferVO.remainingTimeInSeconds <= 0) {
      this.hide();
    }
  };
  Object.defineProperty(CastleReceivedPeaceOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleReceivedPeaceOfferDialog.__initialize_static_members = function () {
    CastleReceivedPeaceOfferDialog.NAME = "CastleReceivedPeaceOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TITLE = "dialog_allianceDiplomacy_peaceOffer_title";
    CastleReceivedPeaceOfferDialog.TEXT_ID_COPY = "message_peaceOffer_copy";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_OFFER = "dialog_allianceDiplomacy_peaceOffer_receiveTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_DEMAND = "dialog_allianceDiplomacy_peaceOffer_payTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_tributeOffered";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_DEMANDED = "dialog_allianceDiplomacy_peaceOffer_tributeDemanded";
    CastleReceivedPeaceOfferDialog.TEXT_ID_OFFERED_TRIBUTE = "dialog_allianceDiplomacy_peaceOffer_offeredTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_DEMANDED_TRIBUTE = "dialog_allianceDiplomacy_peaceOffer_demandedTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPTANCE_TIME = "dialog_allianceDiplomacy_peaceOffer_deadline";
    CastleReceivedPeaceOfferDialog.TEXT_ID_DECLINE_OFFER = "dialog_allianceDiplomacy_peaceOffer_rejectOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER = "dialog_allianceDiplomacy_peaceOffer_acceptOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_HELP_DIALOG_COPY = "help_diplomacy_incomingPeaceOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_DEMAND_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_payTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_OFFER_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_receiveTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_NO_TRIBUTE_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_noTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_DEMAND = "dialog_allianceDiplomacy_peaceOffer_tributeDemanded_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_tributeOffered_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_offeredTribute_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_DEMANDED = "dialog_allianceDiplomacy_peaceOffer_demandedTribute_tooltip";
  };
  return CastleReceivedPeaceOfferDialog;
}(C.CastleExternalDialog);
exports.CastleReceivedPeaceOfferDialog = m;
var f = require("./9.js");
var O = require("./1370.js");
a.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();