Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function InviteAFriendInstructionsProperties(t = 0) {
    var i = this;
    i._startPage = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._startPage = t;
    return i;
  }
  n.__extends(InviteAFriendInstructionsProperties, e);
  Object.defineProperty(InviteAFriendInstructionsProperties.prototype, "startPage", {
    get: function () {
      return this._startPage;
    },
    enumerable: true,
    configurable: true
  });
  return InviteAFriendInstructionsProperties;
}(require("./2.js").BasicProperties);
exports.InviteAFriendInstructionsProperties = o;