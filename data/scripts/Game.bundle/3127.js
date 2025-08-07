Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./141.js");
var d = function (e) {
  function CastleListDetailOverviewItemMisc(t) {
    var i = e.call(this, t) || this;
    i.itxt_publicOrder = i.textFieldManager.registerTextField(t.txt_publicOrder, new s.LocalizedNumberVO(0));
    i.itxt_protection = i.textFieldManager.registerTextField(t.txt_protection, new s.LocalizedNumberVO(0));
    i.itxt_guards = i.textFieldManager.registerTextField(t.txt_guards, new s.LocalizedNumberVO(0));
    i.itxt_population = i.textFieldManager.registerTextField(t.txt_population, new s.LocalizedNumberVO(0));
    i.itxt_marketCarriages = i.textFieldManager.registerTextField(t.txt_marketCarriges, new s.LocalizedNumberVO(0));
    i.itxt_aquamarin = i.textFieldManager.registerTextField(t.txt_aquamarin, new s.LocalizedNumberVO(0));
    i.itxt_aquamarinPoints = i.textFieldManager.registerTextField(t.txt_aquamarin_points, new s.LocalizedNumberVO(0));
    c.ButtonHelper.initBasicButtons([t.btn_visitCastle]);
    return i;
  }
  n.__extends(CastleListDetailOverviewItemMisc, e);
  CastleListDetailOverviewItemMisc.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    var t = l.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    var i = l.CastleModel.kingdomData.isKingdomUnlocked(a.WorldIsland.KINGDOM_ID) ? "-" : "";
    u.CastleTextFieldHelper.safeSetText(this.itxt_aquamarin, i);
    u.CastleTextFieldHelper.safeSetText(this.itxt_aquamarinPoints, i);
    if (t) {
      var n = l.CastleModel.lordData.getBaronByCastleId(t.areaID);
      var o = n ? n.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS) : 0;
      u.CastleTextFieldHelper.safeSetNumber(this.itxt_publicOrder, t.lawAndOrder + o);
      this.itxt_publicOrder.color = t.lawAndOrder < 0 ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
      u.CastleTextFieldHelper.safeSetNumber(this.itxt_protection, t.defence);
      u.CastleTextFieldHelper.safeSetNumber(this.itxt_guards, t.numGuards);
      u.CastleTextFieldHelper.safeSetNumber(this.itxt_population, t.population);
      u.CastleTextFieldHelper.safeSetNumber(this.itxt_marketCarriages, t.numTotalMarketCarriages);
      if (this.wmo.kingdomID == a.WorldIsland.KINGDOM_ID) {
        u.CastleTextFieldHelper.safeSetNumber(this.itxt_aquamarin, t.getResource(p.CollectableEnum.AQUAMARINE));
        u.CastleTextFieldHelper.safeSetNumber(this.itxt_aquamarinPoints, l.CastleModel.userData.aquaPoints);
      }
    } else {
      u.CastleTextFieldHelper.safeSetText(this.itxt_publicOrder, "-");
      u.CastleTextFieldHelper.safeSetText(this.itxt_protection, "-");
      u.CastleTextFieldHelper.safeSetText(this.itxt_guards, "-");
      u.CastleTextFieldHelper.safeSetText(this.itxt_population, "-");
      u.CastleTextFieldHelper.safeSetText(this.itxt_marketCarriages, "-");
    }
  };
  return CastleListDetailOverviewItemMisc;
}(require("./1042.js").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemMisc = d;
var p = require("./12.js");
var h = require("./33.js");
o.classImplementsInterfaces(d, "MovieClip");