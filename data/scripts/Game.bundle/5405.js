Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./207.js");
var s = require("./5406.js");
var r = require("./5407.js");
var l = require("./83.js");
var c = function (e) {
  function MessageAdvisorSummaryVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageAdvisorSummaryVO, e);
  MessageAdvisorSummaryVO.prototype.parseMessageHeader = function (e) {
    this.advisorType = parseInt(e);
  };
  MessageAdvisorSummaryVO.prototype.parseSubject = function () {
    return o.Localize.text("title_advisor_AttackSummary");
  };
  MessageAdvisorSummaryVO.prototype.parseSender = function () {
    return o.Localize.text("title_advisor_" + a.AdvisorAttackHelper.getTextIDSuffix(this.advisorType));
  };
  Object.defineProperty(MessageAdvisorSummaryVO.prototype, "additionalIconName", {
    get: function () {
      switch (this.advisorType) {
        case 0:
        default:
          return o.Localize.text("CastleMessageIconsNomadAdvisor");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAdvisorSummaryVO.prototype, "dialogInfo", {
    get: function () {
      return new l.DialogInfoVO(s.AdvisorAttackSummaryDialog, new r.AdvisorAttackSummaryDialogProperties(this.messageID, this.advisorType));
    },
    enumerable: true,
    configurable: true
  });
  return MessageAdvisorSummaryVO;
}(require("./99.js").AMessageVO);
exports.MessageAdvisorSummaryVO = c;