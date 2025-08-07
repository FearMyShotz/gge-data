Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function IdentityManagementEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(IdentityManagementEvent, e);
  IdentityManagementEvent.ID_MANAGEMENT_ACTIVE = "idMangementActive";
  IdentityManagementEvent.ID_MANAGEMENT_INCTIVE = "idMangementInactive";
  return IdentityManagementEvent;
}(createjs.Event);
exports.IdentityManagementEvent = a;