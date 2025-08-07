Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./72.js");
var r = require("./4.js");
var l = function (e) {
  function CastleEilandData(t) {
    var i = e.call(this) || this;
    i.fillFromParamXML(t);
    return i;
  }
  n.__extends(CastleEilandData, e);
  CastleEilandData.prototype.fillFromParamXML = function (e) {
    this.parseIslandBlueprints(e);
  };
  CastleEilandData.prototype.parseIslandBlueprints = function (e) {
    this.islandBlueprints = new Map();
    var t = e.isles;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = a.int(o.IsleID || "");
          this.islandBlueprints.set(s, new c.CastleIsleBlueprintVO(o));
        }
      }
    }
  };
  CastleEilandData.prototype.getIsleBlueprint = function (e) {
    if (o.DictionaryUtil.containsKey(this.islandBlueprints, e)) {
      return this.islandBlueprints.get(e);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleEilandData.prototype, "kingTitleVO", {
    get: function () {
      return r.CastleModel.titleData.islandKingTitle;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandData;
}(s.CastleEventDispatcher);
exports.CastleEilandData = l;
var c = require("./5626.js");