Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4280.js");
var r = function (e) {
  function CastleFactionInvasionCampData(t) {
    var i = this;
    i._nodesBlueFaction = new Map();
    i._nodesRedFaction = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    return i;
  }
  n.__extends(CastleFactionInvasionCampData, e);
  CastleFactionInvasionCampData.prototype.getXmlList = function (e) {
    return e.factioninvasioncamps;
  };
  CastleFactionInvasionCampData.prototype.parseXML = function (e) {
    var t = new Map();
    var i = new Map();
    var n = new Map();
    var o = this.getXmlList(e);
    if (o != null) {
      for (var s = 0, r = o; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          var c = this.getNewNode();
          c.parseXML(l);
          t.set(c.getId(), c);
          if (c.factionID == a.FactionConst.BLUE_FACTION) {
            n.set(c.countVictory, c);
          } else {
            i.set(c.countVictory, c);
          }
        }
      }
    }
    this._nodes = t;
    this._nodesBlueFaction = n;
    this._nodesRedFaction = i;
  };
  CastleFactionInvasionCampData.prototype.getNewNode = function () {
    return new s.CastleFactionInvasionCampNodeVO();
  };
  CastleFactionInvasionCampData.prototype.getFactionInvasion = function (e, t) {
    if (t == a.FactionConst.BLUE_FACTION) {
      return this._nodesBlueFaction.get(e);
    } else {
      return this._nodesRedFaction.get(e);
    }
  };
  return CastleFactionInvasionCampData;
}(require("./339.js").CastleXmlData);
exports.CastleFactionInvasionCampData = r;
o.classImplementsInterfaces(r, "IUpdatable");