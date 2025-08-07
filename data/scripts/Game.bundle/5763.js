Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./22.js");
var r = function (e) {
  function CastleSpecialServerData(t) {
    var i = e.call(this) || this;
    i._skins = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleSpecialServerData, e);
  CastleSpecialServerData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.externalServerSkins; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = parseInt(s.CastleXMLUtils.getValueOrDefault("skinID", n, "0", true));
        var a = s.CastleXMLUtils.getValueOrDefault("skin", n, "0", true);
        this._skins.set(o, a);
      }
    }
  };
  CastleSpecialServerData.prototype.getSkinNameByID = function (e) {
    return this._skins.get(e);
  };
  return CastleSpecialServerData;
}(a.CastleBasicData);
exports.CastleSpecialServerData = r;
o.classImplementsInterfaces(r, "IUpdatable", "ICastleBasicData");