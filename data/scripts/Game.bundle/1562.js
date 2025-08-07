Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = function () {
  function AllianceHelpRequestHealParamsVO(e = 0, t = 0, i = 0, n = 0) {
    this.id = 0;
    this.hospitalListID = 0;
    this.areaID = 0;
    this.spaceID = 0;
    this.id = e;
    this.hospitalListID = t;
    this.areaID = i;
    this.spaceID = n;
  }
  AllianceHelpRequestHealParamsVO.prototype.parseParams = function (e) {
    this.id = o.int(e.RID);
    this.hospitalListID = o.int(e.T);
    this.areaID = o.int(e.AID);
    this.spaceID = o.int(e.SID);
  };
  AllianceHelpRequestHealParamsVO.prototype.isSameAs = function (e) {
    if (n.instanceOfClass(e, "AllianceHelpRequestHealParamsVO")) {
      var t = e;
      return this.id == t.id || !!this.hospitalListID && !!t.hospitalListID && this.hospitalListID == t.hospitalListID && this.areaID == t.areaID && this.spaceID == t.spaceID;
    }
    return false;
  };
  return AllianceHelpRequestHealParamsVO;
}();
exports.AllianceHelpRequestHealParamsVO = a;
n.classImplementsInterfaces(a, "IAllianceHelpRequestParamsVO");