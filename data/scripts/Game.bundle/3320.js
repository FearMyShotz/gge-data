Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./35.js");
var u = require("./141.js");
var d = require("./401.js");
var p = require("./287.js");
var h = function (e) {
  function ResourcePanelToolTipPopulation() {
    return e.call(this, g.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION) || this;
  }
  n.__extends(ResourcePanelToolTipPopulation, e);
  ResourcePanelToolTipPopulation.prototype.createItems = function () {
    this._title = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._amount = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._info = new p.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._amount);
    this._items.push(this._info);
  };
  ResourcePanelToolTipPopulation.prototype.updateContent = function () {
    u.CastleTextFieldHelper.safeSetText(this._title.tf, "population");
    u.CastleTextFieldHelper.safeSetText(this._amount.tf, o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [l.CastleModel.areaData.activeCommonInfo.population, this.getMaxpopulation()]);
    u.CastleTextFieldHelper.safeSetText(this._info.tf, "increasesTaxRevenue");
  };
  ResourcePanelToolTipPopulation.prototype.getMaxpopulation = function () {
    var e = r.int(l.CastleModel.areaData.activeCommonInfo.maxPopulation);
    if (l.CastleModel.kingdomData.activeKingdomID == s.WorldClassic.KINGDOM_ID && l.CastleModel.areaData.activeArea.isMyHomeCastle) {
      e += Math.ceil(e * l.CastleModel.researchData.getResearchEffectValue(c.EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BOOST).strength * 0.01);
      e += r.int(l.CastleModel.researchData.getResearchEffectValue(c.EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BONUS).strength);
    }
    return e;
  };
  return ResourcePanelToolTipPopulation;
}(d.AResourcePanelToolTip);
exports.ResourcePanelToolTipPopulation = h;
var g = require("./152.js");
a.classImplementsInterfaces(h, "Container");