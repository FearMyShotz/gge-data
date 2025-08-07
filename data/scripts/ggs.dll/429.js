Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function GenerateInviteCodeEvent(t, n, i = null, a = false, s = false) {
    var r = e.call(this, t, a, s) || this;
    r._statusId = n;
    r._inviteCodeOrLink = i;
    return r;
  }
  i.__extends(GenerateInviteCodeEvent, e);
  Object.defineProperty(GenerateInviteCodeEvent.prototype, "statusId", {
    get: function () {
      return this._statusId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenerateInviteCodeEvent.prototype, "inviteCodeOrLink", {
    get: function () {
      return this._inviteCodeOrLink;
    },
    enumerable: true,
    configurable: true
  });
  GenerateInviteCodeEvent.INVITE_CODE_GENERATED = "inviteCodeGenerated";
  GenerateInviteCodeEvent.GENERATE_INVITE_CODE_FAILED = "generateInviteCodeFailed";
  return GenerateInviteCodeEvent;
}(createjs.Event);
exports.GenerateInviteCodeEvent = a;