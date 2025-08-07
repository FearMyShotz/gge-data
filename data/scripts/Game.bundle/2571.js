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
var d = require("./16.js");
var p = require("./607.js");
var h = require("./4.js");
var g = require("./27.js");
var C = require("./11.js");
var _ = require("./1369.js");
var m = require("./2572.js");
var f = function (e) {
  function CastleSuggestPeaceDialog() {
    var t = this;
    t._numberOfDaysToAccept = s.AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME;
    t._currentTributePercentage = 0;
    t._isDemanding = true;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSuggestPeaceDialog.NAME) || this;
  }
  n.__extends(CastleSuggestPeaceDialog, e);
  CastleSuggestPeaceDialog.prototype.init = function () {
    e.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_demand, this.dialogDisp.btn_offer, this.dialogDisp.btn_less, this.dialogDisp.btn_more]);
  };
  CastleSuggestPeaceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._itxt_tributeDemanded = this.textFieldManager.registerTextField(this.dialogDisp.infotxt_demand.txt_info, new l.LocalizedTextVO(CastleSuggestPeaceDialog.demandTextId));
    this._itxt_tributeOffered = this.textFieldManager.registerTextField(this.dialogDisp.infotxt_offer.txt_info, new l.LocalizedTextVO(CastleSuggestPeaceDialog.offerTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_acceptanceTime, new l.LocalizedTextVO(CastleSuggestPeaceDialog.acceptanceTextId, [g.CastleTimeStringHelper.getEventTimeString(this._numberOfDaysToAccept)]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(CastleSuggestPeaceDialog.titleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO(CastleSuggestPeaceDialog.copyTextId, [new c.TextVO(this.dialogProperties.peaceOfferVO.opposingAllianceName)]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_ok, new l.LocalizedTextVO(CastleSuggestPeaceDialog.sendOfferTextId));
    this._itxt_tributePercentage = this.textFieldManager.registerTextField(this.dialogDisp.mc_tribute.txt_tributepercentage, new l.LocalizedTextVO("value_percentage", [50]));
    this._tributeSliderValueController = new m.CastleTributeValueChangerController(CastleSuggestPeaceDialog.maximumTributePercentage / 2, CastleSuggestPeaceDialog.minimumTributePercentage, CastleSuggestPeaceDialog.maximumTributePercentage, CastleSuggestPeaceDialog.sliderTooltipTextId);
    this._tributeSliderValueController.addButtons(this.dialogDisp, CastleSuggestPeaceDialog.sliderPlusMinusButtonIncrement);
    this._tributeSliderValueController.addSlider(this.dialogDisp.sliderContainer);
    this._tributeSliderValueController.valueUpdatedSignal.add(this.bindFunction(this.onTributeChange));
    this.switchMarkedAsDemanding(this.dialogProperties.peaceOfferVO.isDemanded);
    this._tributeSliderValueController.setValue(this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleSuggestPeaceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.confirmSend();
        break;
      case this.dialogDisp.btn_demand:
        this.switchMarkedAsDemanding(true);
        break;
      case this.dialogDisp.btn_offer:
        this.switchMarkedAsDemanding(false);
        break;
      case this.dialogDisp.btn_help:
        O.CastleDialogHandler.getInstance().showHelper(r.Localize.text(o.GenericTextIds.COMMON_HELP), r.Localize.text(CastleSuggestPeaceDialog.helpDialogCopyTextID));
    }
  };
  CastleSuggestPeaceDialog.prototype.confirmSend = function () {
    var e = r.Localize.text(this._isDemanding ? CastleSuggestPeaceDialog.confirmDemandCopyTextID : CastleSuggestPeaceDialog.confirmOfferCopyTextID, [this._currentTributePercentage]);
    O.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleTimedOKCharacterYesNoOKDialog, new _.CastleTimedOKCharacterYesNoOKDialogProperties(r.Localize.text("generic_alert_watchout"), e, 4, this.bindFunction(this.onAcceptConfirmed), this.bindFunction(this.onAcceptRegret), true, null, 1));
  };
  CastleSuggestPeaceDialog.prototype.onAcceptRegret = function (e = null) {};
  CastleSuggestPeaceDialog.prototype.onAcceptConfirmed = function (e = null) {
    this.sendTermsOfPeace();
    this.hide();
  };
  CastleSuggestPeaceDialog.prototype.sendTermsOfPeace = function () {
    this.dialogProperties.peaceOfferVO.isDemanded = this._isDemanding;
    this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded = this._currentTributePercentage;
    var e = u.int(this._isDemanding ? -1 : 1);
    h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceChangeDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID, s.AllianceConst.DIPLOMACY_NEUTRAL, this._currentTributePercentage * e));
  };
  CastleSuggestPeaceDialog.prototype.switchMarkedAsDemanding = function (e) {
    this._isDemanding = e;
    this.dialogDisp.btn_demand.gotoAndStop(this._isDemanding ? 2 : 1);
    this.dialogDisp.btn_demand.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.demandTooltipActiveTextId : CastleSuggestPeaceDialog.demandTooltipTextId;
    this.dialogDisp.infotxt_demand.gotoAndStop(this._isDemanding ? 2 : 1);
    this._itxt_tributeDemanded.color = this._isDemanding ? d.ClientConstColor.GENERIC_DIRTY_RED : d.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.btn_offer.gotoAndStop(this._isDemanding ? 1 : 2);
    this.dialogDisp.btn_offer.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.offerTooltipTextId : CastleSuggestPeaceDialog.offerTooltipActiveTextId;
    this.dialogDisp.infotxt_offer.gotoAndStop(this._isDemanding ? 1 : 2);
    this._itxt_tributeOffered.color = this._isDemanding ? d.ClientConstColor.FONT_DEFAULT_COLOR : d.ClientConstColor.GENERIC_DIRTY_RED;
    this.dialogDisp.mc_tribute.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.percentageDemandedTooltipTextId : CastleSuggestPeaceDialog.percentageOfferedTooltipTextId;
    this.dialogDisp.mc_tribute.mouseChildren = false;
  };
  CastleSuggestPeaceDialog.prototype.onTributeChange = function () {
    this._currentTributePercentage = u.int(this._tributeSliderValueController.value);
    this._itxt_tributePercentage.text = r.Localize.text("value_percentage", [this._currentTributePercentage]);
  };
  CastleSuggestPeaceDialog.prototype.hideLoaded = function (t = null) {
    this._tributeSliderValueController.valueUpdatedSignal.remove(this.bindFunction(this.onTributeChange));
    this._tributeSliderValueController.dispose();
    e.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleSuggestPeaceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSuggestPeaceDialog.__initialize_static_members = function () {
    CastleSuggestPeaceDialog.NAME = "CastleSuggestPeace";
    CastleSuggestPeaceDialog.sliderPlusMinusButtonIncrement = 5;
    CastleSuggestPeaceDialog.minimumTributePercentage = 0;
    CastleSuggestPeaceDialog.maximumTributePercentage = 50;
    CastleSuggestPeaceDialog.copyTextId = "dialog_allianceDiplomacy_offerPeace_copy";
    CastleSuggestPeaceDialog.titleTextId = "dialog_allianceDiplomacy_offerPeace_title";
    CastleSuggestPeaceDialog.acceptanceTextId = "dialog_allianceDiplomacy_offerPeace_timeLimit";
    CastleSuggestPeaceDialog.helpDialogCopyTextID = "help_diplomacy_peaceOffer";
    CastleSuggestPeaceDialog.demandTextId = "dialog_allianceDiplomacy_demandTribute";
    CastleSuggestPeaceDialog.offerTextId = "dialog_allianceDiplomacy_offerTribute";
    CastleSuggestPeaceDialog.demandTooltipTextId = "dialog_allianceDiplomacy_demandTribute_tooltip";
    CastleSuggestPeaceDialog.demandTooltipActiveTextId = "dialog_allianceDiplomacy_demandTribute_active_tooltip";
    CastleSuggestPeaceDialog.offerTooltipTextId = "dialog_allianceDiplomacy_offerTribute_tooltip";
    CastleSuggestPeaceDialog.offerTooltipActiveTextId = "dialog_allianceDiplomacy_offerTribute_active_tooltip";
    CastleSuggestPeaceDialog.sendOfferTextId = "dialog_allianceDiplomacy_offerPeace_sendOffer";
    CastleSuggestPeaceDialog.confirmOfferCopyTextID = "dialog_allianceDiplomacy_offerPeace_confirm_offerTribute";
    CastleSuggestPeaceDialog.confirmDemandCopyTextID = "dialog_allianceDiplomacy_offerPeace_confirm_demandTribute";
    CastleSuggestPeaceDialog.confirmNoTributeCopyTextID = "dialog_allianceDiplomacy_peaceOffer_confirm_noTribute";
    CastleSuggestPeaceDialog.sliderTooltipTextId = "dialog_allianceDiplomacy_offerPeace_slider_tooltip";
    CastleSuggestPeaceDialog.percentageDemandedTooltipTextId = "dialog_allianceDiplomacy_peaceOffer_demandedTribute_tooltip";
    CastleSuggestPeaceDialog.percentageOfferedTooltipTextId = "dialog_allianceDiplomacy_peaceOffer_offeredTribute_tooltip";
  };
  return CastleSuggestPeaceDialog;
}(C.CastleExternalDialog);
exports.CastleSuggestPeaceDialog = f;
var O = require("./9.js");
var E = require("./1370.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();