Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function SetInviteCodeEvent(t, n, i = false, a = false) {
    var s = e.call(this, t, i, a) || this;
    s._statusId = n;
    return s;
  }
  i.__extends(SetInviteCodeEvent, e);
  Object.defineProperty(SetInviteCodeEvent.prototype, "statusId", {
    get: function () {
      return this._statusId;
    },
    enumerable: true,
    configurable: true
  });
  SetInviteCodeEvent.INVITE_CODE_SET = "inviteCodeSet";
  SetInviteCodeEvent.SET_INVITE_CODE_FAILED = "setInviteCodeFailed";
  return SetInviteCodeEvent;
}(createjs.Event);
exports.SetInviteCodeEvent = a;