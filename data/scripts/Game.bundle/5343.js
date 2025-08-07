Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceHelpRequestParamsFactory() {}
  AllianceHelpRequestParamsFactory.parseParams = function (e, t) {
    var i;
    switch (e) {
      case o.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case o.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
      case o.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        i = new r.AllianceHelpRequestRecruitParamsVO();
        break;
      case o.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        i = new s.AllianceHelpRequestHealParamsVO();
        break;
      case o.AllianceConst.ALLIANCE_HELP_REPAIR:
        i = new l.AllianceHelpRequestRepairParamsVO();
        break;
      case o.AllianceConst.ALLIANCE_HELP_BUILD:
        i = new a.AllianceHelpRequestConstructionParamsVO();
    }
    i.parseParams(t);
    return i;
  };
  return AllianceHelpRequestParamsFactory;
}();
exports.AllianceHelpRequestParamsFactory = n;
var o = require("./5.js");
var a = require("./857.js");
var s = require("./1562.js");
var r = require("./1571.js");
var l = require("./1521.js");