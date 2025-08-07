Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./22.js");
var a = require("./4.js");
var s = require("./165.js");
var r = function (e) {
  function AllianceBuffVO() {
    var t = e.call(this) || this;
    t.allianceBuffID = 0;
    t.nextAllianceBuffID = 0;
    t.seriesID = 0;
    t.level = 0;
    t.maxLevel = 0;
    t.duration = 0;
    t.requiredMemberBuffLevel = 0;
    t.forgingCostC1 = 0;
    t.availableInAllianceFunds = false;
    t.requiredBuffID = -1;
    t.resetOnEventEnd = -1;
    t.isBattleground = false;
    t.hiddenBattleGround = false;
    return t;
  }
  n.__extends(AllianceBuffVO, e);
  AllianceBuffVO.prototype.fillFromParamXml = function (e) {
    this.level = parseInt(e.level || "");
    this.maxLevel = parseInt(e.maxLevel || "");
    this.allianceBuffID = parseInt(e.allianceBuffID || "");
    this.seriesID = parseInt(e.allianceBuffSeriesID || "");
    this.nextAllianceBuffID = parseInt(e.nextAllianceBuffID || "");
    this.duration = parseInt(o.CastleXMLUtils.getValueOrDefault("duration", e, "-1"));
    this.costsList = c.CollectableManager.parser.x2cList.createList(e, l.ClientConstCollectable.XML_PREFIX_COST);
    this.forgingCostC1 = parseInt(o.CastleXMLUtils.getValueOrDefault("forgingCostC1", e, "0"));
    this.requiredBuffID = parseInt(o.CastleXMLUtils.getValueOrDefault("requiredBuffID", e, "-1"));
    this.availableInAllianceFunds = parseInt(o.CastleXMLUtils.getValueOrDefault("availableInAllianceFunds", e, "1")) == 1;
    this.resetOnEventEnd = parseInt(o.CastleXMLUtils.getValueOrDefault("resetOnEventEnd", e, "-1"));
    this.isBattleground = parseInt(o.CastleXMLUtils.getValueOrDefault("isBattleground", e, "0")) == 1;
    this.hiddenBattleGround = parseInt(o.CastleXMLUtils.getValueOrDefault("hiddenBattleGround", e, "0")) == 1;
    var t = o.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var r = n[i];
        if (r.length > 0) {
          var u = r.split("&");
          var d = a.CastleModel.effectsData.getEffectByID(parseInt(u[0]));
          var p = new s.BonusVO().parseFromValueString(d, u[1]);
          this._boni.push(p);
        }
      }
    }
  };
  return AllianceBuffVO;
}(require("./686.js").EffectsHandlerVO);
exports.AllianceBuffVO = r;
var l = require("./86.js");
var c = require("./50.js");