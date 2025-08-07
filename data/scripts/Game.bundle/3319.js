Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./141.js");
var p = require("./401.js");
var h = require("./287.js");
var g = require("./1633.js");
var C = function (e) {
  function ResourcePanelToolTipMorale() {
    return e.call(this, _.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD) || this;
  }
  n.__extends(ResourcePanelToolTipMorale, e);
  ResourcePanelToolTipMorale.prototype.createItems = function () {
    this._title = new h.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._deco = new g.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._factionDeco = new g.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._moraleOther = new g.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._troops = new g.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._morale = new g.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair_Moral());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipMorale.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    this._items.push(this._title);
    this._items.push(this._deco);
    d.CastleTextFieldHelper.safeSetText(this._title.tf, "morality");
    d.CastleTextFieldHelper.safeSetText(this._deco.tf1, o.GenericTextIds.VALUE_COLON, [l.Localize.text("decoration")]);
    d.CastleTextFieldHelper.safeSetText(this._deco.tf2, u.CastleModel.areaData.activeMorality.getMoralityPlus().toString());
    if (u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID) {
      d.CastleTextFieldHelper.safeSetText(this._factionDeco.tf1, o.GenericTextIds.VALUE_COLON, [l.Localize.text("morality_decoFactionBonus")]);
      d.CastleTextFieldHelper.safeSetText(this._factionDeco.tf2, u.CastleModel.areaData.activeMorality.getFactionMoralityPlus().toString());
      this._items.push(this._factionDeco);
    }
    var e = u.CastleModel.areaData.activeMorality.getMoralityPlus() + u.CastleModel.areaData.activeMorality.getFactionMoralityPlus() - Math.abs(u.CastleModel.areaData.activeMorality.getTroopStrength());
    if ((e = Math.abs(e - u.CastleModel.areaData.activeMorality.morality)) > 0) {
      d.CastleTextFieldHelper.safeSetText(this._moraleOther.tf1, o.GenericTextIds.VALUE_COLON, [l.Localize.text("morality_decoFaction_otherBonus")]);
      d.CastleTextFieldHelper.safeSetText(this._moraleOther.tf2, e.toString());
      this._items.push(this._moraleOther);
    }
    d.CastleTextFieldHelper.safeSetText(this._troops.tf1, o.GenericTextIds.VALUE_COLON, [l.Localize.text("troopstrength")]);
    d.CastleTextFieldHelper.safeSetText(this._troops.tf2, o.GenericTextIds.VALUE_NOMINAL_SUBTRACT, [Math.abs(u.CastleModel.areaData.activeMorality.getTroopStrength())]);
    d.CastleTextFieldHelper.safeSetText(this._morale.tf1, o.GenericTextIds.VALUE_PERCENTAGE, [c.int(ResourcePanelToolTipMorale.morality * 100)]);
    d.CastleTextFieldHelper.safeSetNumber(this._morale.tf2, u.CastleModel.areaData.activeMorality.morality);
    this._items.push(this._troops);
    this._items.push(this._divider);
    this._items.push(this._morale);
  };
  Object.defineProperty(ResourcePanelToolTipMorale, "morality", {
    get: function () {
      if (u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID) {
        return r.FactionConst.getMoraleModifier(u.CastleModel.areaData.activeMorality.morality);
      } else {
        return s.CombatConst.getMoralBonus(u.CastleModel.areaData.activeMorality.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipMorale;
}(p.AResourcePanelToolTip);
exports.ResourcePanelToolTipMorale = C;
var _ = require("./152.js");
a.classImplementsInterfaces(C, "Container");