Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./207.js");
var s = require("./5405.js");
var r = require("./5406.js");
var l = require("./83.js");
var c = function (e) {
  function MessageAdvisorFailureVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageAdvisorFailureVO, e);
  MessageAdvisorFailureVO.prototype.parseMessageHeader = function (e) {
    this.advisorType = parseInt(e.split("+")[0]);
    this.commanderId = parseInt(e.split("+")[1]);
    this.failureId = parseInt(e.split("+")[2]);
  };
  MessageAdvisorFailureVO.prototype.parseSubject = function () {
    return o.Localize.text("title_advisor_AttackFailed");
  };
  MessageAdvisorFailureVO.prototype.parseSender = function () {
    return o.Localize.text("title_advisor_" + a.AdvisorAttackHelper.getTextIDSuffix(this.advisorType));
  };
  Object.defineProperty(MessageAdvisorFailureVO.prototype, "additionalIconName", {
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
  Object.defineProperty(MessageAdvisorFailureVO.prototype, "dialogInfo", {
    get: function () {
      return new l.DialogInfoVO(s.AdvisorAttackFailDialog, new r.AdvisorAttackFailDialogProperties(this.advisorType, this.commanderId, this.failureId));
    },
    enumerable: true,
    configurable: true
  });
  return MessageAdvisorFailureVO;
}(require("./99.js").AMessageVO);
exports.MessageAdvisorFailureVO = c;