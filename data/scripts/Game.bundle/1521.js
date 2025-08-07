Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function () {
  function AllianceHelpRequestRepairParamsVO(e = 0, t = 0, i = 0) {
    this.kingdomID = 0;
    this.areaID = 0;
    this.objectID = 0;
    this.kingdomID = e;
    this.areaID = t;
    this.objectID = i;
  }
  AllianceHelpRequestRepairParamsVO.prototype.parseParams = function (e) {
    this.kingdomID = a.int(e.KID);
    this.areaID = a.int(e.AID);
    this.objectID = a.int(e.OID);
  };
  AllianceHelpRequestRepairParamsVO.prototype.isSameAs = function (e) {
    var t = n.castAs(e, "AllianceHelpRequestRepairParamsVO");
    return !!t && this.kingdomID == t.kingdomID && this.areaID == t.areaID && this.objectID == t.objectID;
  };
  return AllianceHelpRequestRepairParamsVO;
}();
exports.AllianceHelpRequestRepairParamsVO = s;
o.classImplementsInterfaces(s, "IAllianceHelpRequestParamsVO");