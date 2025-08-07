Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function LRICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LRICommand, e);
  Object.defineProperty(LRICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_LOOP_RECRUITMENT_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LRICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new h.AutoRecruitmentPurchaseDialogProperties(i);
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(this.getDialogClassByListId(n.listId), n);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  LRICommand.prototype.getDialogClassByListId = function (e) {
    switch (e) {
      case s.UnitProductionConst.TOOLS_LIST:
        return d.AutoRecruitmentPurchaseToolsDialog;
      default:
        return p.AutoRecruitmentPurchaseUnitsDialog;
    }
  };
  return LRICommand;
}(l.CastleCommand);
exports.LRICommand = c;
var u = require("./9.js");
var d = require("./5025.js");
var p = require("./5028.js");
var h = require("./5029.js");
o.classImplementsInterfaces(c, "IExecCommand");