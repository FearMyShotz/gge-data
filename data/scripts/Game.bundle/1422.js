Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FriendInviteEmailEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._parameters = i;
    return a;
  }
  n.__extends(FriendInviteEmailEvent, e);
  Object.defineProperty(FriendInviteEmailEvent.prototype, "parameters", {
    get: function () {
      return this._parameters;
    },
    enumerable: true,
    configurable: true
  });
  FriendInviteEmailEvent.__initialize_static_members = function () {
    FriendInviteEmailEvent.SEND_EMAIL_RESPONSE = "sendEmailResponse";
  };
  return FriendInviteEmailEvent;
}(createjs.Event);
exports.FriendInviteEmailEvent = o;
o.__initialize_static_members();