Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./22.js");
var s = function (e) {
  function CastleFactionInvasionCampNodeVO() {
    var t = this;
    t._factionInvasionCampID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleFactionInvasionCampNodeVO, e);
  CastleFactionInvasionCampNodeVO.prototype.parseXML = function (t) {
    e.prototype.parseXML.call(this, t);
    this._factionInvasionCampID = parseInt(a.CastleXMLUtils.getValueOrDefault("factionInvasionCampID", t, "0"));
  };
  CastleFactionInvasionCampNodeVO.prototype.getId = function () {
    return this._factionInvasionCampID;
  };
  return CastleFactionInvasionCampNodeVO;
}(require("./1140.js").CastleInvasionCampNodeVO);
exports.CastleFactionInvasionCampNodeVO = s;
o.classImplementsInterfaces(s, "ICastleXmlNode");