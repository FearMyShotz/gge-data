Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./339.js");
var s = require("./1140.js");
var r = function (e) {
  function CastleSamuraiCampData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleSamuraiCampData, e);
  CastleSamuraiCampData.prototype.getXmlList = function (e) {
    return e.samuraiCamps;
  };
  CastleSamuraiCampData.prototype.getNewNode = function () {
    return new s.CastleInvasionCampNodeVO();
  };
  CastleSamuraiCampData.prototype.getSamuraiCamp = function (e) {
    return this._nodes.get(e);
  };
  return CastleSamuraiCampData;
}(a.CastleXmlData);
exports.CastleSamuraiCampData = r;
o.classImplementsInterfaces(r, "IUpdatable");