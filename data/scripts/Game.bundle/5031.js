Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./645.js");
var l = require("./1934.js");
var c = require("./10.js");
var u = function (e) {
  function URLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(URLCommand, e);
  Object.defineProperty(URLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_UPDATE_RECRUITMENT_LOOP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  URLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.controller.dispatchEvent(new r.AutoRecruitmentEvent(r.AutoRecruitmentEvent.ON_PURCHASE_CONFIRM));
        break;
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        var i = JSON.parse(t[1]);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.AutoRecruitmentBuyRecruitmentSlots, new l.AutoRecruitmentBuyRecruitmentSlotsProperties(i.LID, i.AMT));
        this.controller.dispatchEvent(new r.AutoRecruitmentEvent(r.AutoRecruitmentEvent.ON_PURCHASE_DENY));
        break;
      default:
        this.controller.dispatchEvent(new r.AutoRecruitmentEvent(r.AutoRecruitmentEvent.ON_PURCHASE_DENY));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return URLCommand;
}(c.CastleCommand);
exports.URLCommand = u;
var d = require("./9.js");
var p = require("./1935.js");
o.classImplementsInterfaces(u, "IExecCommand");