Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./33.js");
var u = require("./141.js");
var d = require("./401.js");
var p = require("./286.js");
var h = require("./1633.js");
var g = function (e) {
  function ResourcePanelToolTipLawAndOrder() {
    return e.call(this, C.ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER) || this;
  }
  n.__extends(ResourcePanelToolTipLawAndOrder, e);
  ResourcePanelToolTipLawAndOrder.prototype.createItems = function () {
    this._title = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._deco = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._protection = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._population = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._riot = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._subscription = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._baron = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._productivity = new h.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipIconTwoShortTexts());
    this._items.push(this._title);
    this._items.push(this._deco);
    this._items.push(this._protection);
    this._items.push(this._population);
    this._items.push(this._riot);
    this._items.push(this._subscription);
    this._items.push(this._baron);
    this._items.push(new Library.CastleInterfaceElements.divider());
    this._items.push(this._productivity);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateContent = function () {
    u.CastleTextFieldHelper.safeSetText(this._title.tf, "publicOrder");
    if (o.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
      this.updateDeco(this._deco.tf2, this._deco.tf1);
      this.updateProtection(this._protection.tf2, this._protection.tf1);
      this.updatePopulation(this._population.tf2, this._population.tf1);
      this.updateRiot(this._riot.tf2, this._riot.tf1);
      this.updateSubscription(this._subscription.tf2, this._subscription.tf1);
      this.updateBaron(this._baron.tf2, this._baron.tf1);
      this.updateProductivity(this._productivity.tf2, this._productivity.tf1);
    } else {
      this.updateDeco(this._deco.tf1, this._deco.tf2);
      this.updateProtection(this._protection.tf1, this._protection.tf2);
      this.updatePopulation(this._population.tf1, this._population.tf2);
      this.updateRiot(this._riot.tf1, this._riot.tf2);
      this.updateSubscription(this._subscription.tf1, this._subscription.tf2);
      this.updateBaron(this._baron.tf1, this._baron.tf2);
      this.updateProductivity(this._productivity.tf1, this._productivity.tf2);
    }
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateDeco = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("decoration")]);
    if (l.CastleModel.areaData.activeCommonInfo) {
      u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.areaData.activeCommonInfo.getDecoPoints() - l.CastleModel.areaData.activeCommonInfo.populationPenalty);
    }
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateProtection = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("protection")]);
    u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.areaData.activeCommonInfo ? l.CastleModel.areaData.activeCommonInfo.protection : 0);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateResearch = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("research")]);
    u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.researchData.getResearchEffectValue(c.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, l.CastleModel.areaData.activeAreaInfo.areaType, l.CastleModel.areaData.activeArea.spaceId).strength);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updatePopulation = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("population")]);
    u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.areaData.activeCommonInfo.populationPenalty);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateRiot = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("riot")]);
    u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.areaData.activeCommonInfo.riot * -1);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateSubscription = function (e, t) {
    var i = l.CastleModel.areaData.activeCommonInfo.getPublicOrderSubscriptionBonus();
    this._subscription.visible = i > 0;
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("dialog_subscriptions_HUD_subscriptionBonus")]);
    u.CastleTextFieldHelper.safeSetNumber(t, i);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateBaron = function (e, t) {
    var i = l.CastleModel.areaData.activeCommonInfo.getPublicOrderBaronBonus();
    this._baron.visible = i > 0;
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_COLON, [r.Localize.text("equipment_itemType_baron")]);
    u.CastleTextFieldHelper.safeSetNumber(t, i);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateProductivity = function (e, t) {
    u.CastleTextFieldHelper.safeSetText(e, a.GenericTextIds.VALUE_PERCENTAGE, [Math.round(l.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * 100)]);
    u.CastleTextFieldHelper.safeSetNumber(t, l.CastleModel.areaData.activeCommonInfo.getLawAndOrderValue());
  };
  return ResourcePanelToolTipLawAndOrder;
}(d.AResourcePanelToolTip);
exports.ResourcePanelToolTipLawAndOrder = g;
var C = require("./152.js");
s.classImplementsInterfaces(g, "Container");