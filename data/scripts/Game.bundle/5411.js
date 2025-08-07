Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./5412.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function MessageAllianceRequestVO() {
    var t = this;
    t.allianceID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageAllianceRequestVO, e);
  MessageAllianceRequestVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this.allianceID = parseInt(t[0]);
    this.allianceName = t[1];
  };
  MessageAllianceRequestVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_alliance_invitationHeader");
  };
  MessageAllianceRequestVO.prototype.parseSender = function () {
    return this.allianceName;
  };
  Object.defineProperty(MessageAllianceRequestVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(c.CastleAllianceInvitationDialog, new a.CastleAllianceInvitationDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceRequestVO;
}(r.AMessageVO);
exports.MessageAllianceRequestVO = l;
var c = require("./1367.js");