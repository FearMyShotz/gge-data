Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function () {
  function AllianceHelpRequestConstructionParamsVO(e = 0, t = 0, i = 0) {
    this.kingdomID = 0;
    this.areaID = 0;
    this.objectID = 0;
    this.kingdomID = e;
    this.areaID = t;
    this.objectID = i;
  }
  AllianceHelpRequestConstructionParamsVO.prototype.parseParams = function (e) {
    this.kingdomID = a.int(e.KID);
    this.areaID = a.int(e.AID);
    this.objectID = a.int(e.OID);
  };
  AllianceHelpRequestConstructionParamsVO.prototype.isSameAs = function (e) {
    var t = n.castAs(e, "AllianceHelpRequestConstructionParamsVO");
    return !!t && this.kingdomID == t.kingdomID && this.areaID == t.areaID && this.objectID == t.objectID;
  };
  return AllianceHelpRequestConstructionParamsVO;
}();
exports.AllianceHelpRequestConstructionParamsVO = s;
o.classImplementsInterfaces(s, "IAllianceHelpRequestParamsVO");