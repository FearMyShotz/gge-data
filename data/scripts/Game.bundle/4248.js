Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function AllianceCrestColorVO() {
    this._allianceCoatColorID = -1;
  }
  AllianceCrestColorVO.prototype.parseXML = function (e) {
    this._allianceCoatColorID = n.CastleXMLUtils.getIntAttribute("allianceCoatColorID", e);
    this._color = n.CastleXMLUtils.getStringAttribute("color", e);
  };
  Object.defineProperty(AllianceCrestColorVO.prototype, "allianceCoatColorID", {
    get: function () {
      return this._allianceCoatColorID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestColorVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestColorVO;
}();
exports.AllianceCrestColorVO = o;