Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./339.js");
var s = require("./1140.js");
var r = function (e) {
  function CastleNomadCampData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleNomadCampData, e);
  CastleNomadCampData.prototype.getXmlList = function (e) {
    return e.nomadCamps;
  };
  CastleNomadCampData.prototype.getNewNode = function () {
    return new s.CastleInvasionCampNodeVO();
  };
  CastleNomadCampData.prototype.getNomadCamp = function (e) {
    return this._nodes.get(e);
  };
  return CastleNomadCampData;
}(a.CastleXmlData);
exports.CastleNomadCampData = r;
o.classImplementsInterfaces(r, "IUpdatable");