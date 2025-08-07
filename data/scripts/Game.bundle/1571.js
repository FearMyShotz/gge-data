Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function () {
  function AllianceHelpRequestRecruitParamsVO(e = 0, t = 0, i = 0, n = 0) {
    this.recruitID = 0;
    this.areaID = 0;
    this.spaceID = 0;
    this.recruitmentListID = 0;
    this.recruitID = e;
    this.areaID = t;
    this.spaceID = i;
    this.recruitmentListID = n;
  }
  AllianceHelpRequestRecruitParamsVO.prototype.parseParams = function (e) {
    this.recruitID = a.int(e.RID);
    this.areaID = a.int(e.AID);
    this.spaceID = a.int(e.SID);
    this.recruitmentListID = a.int(e.RLID);
  };
  AllianceHelpRequestRecruitParamsVO.prototype.isSameAs = function (e) {
    if (o.instanceOfClass(e, "AllianceHelpRequestRecruitParamsVO")) {
      var t = e;
      return this.recruitID == t.recruitID && this.areaID == t.areaID && this.spaceID == t.spaceID && this.recruitmentListID == t.recruitmentListID;
    }
    return false;
  };
  return AllianceHelpRequestRecruitParamsVO;
}();
exports.AllianceHelpRequestRecruitParamsVO = s;
n.classImplementsInterfaces(s, "IAllianceHelpRequestParamsVO");