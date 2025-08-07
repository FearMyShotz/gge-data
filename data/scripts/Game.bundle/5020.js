Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./1576.js");
var c = require("./15.js");
var u = require("./10.js");
var d = function (e) {
  function DRICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DRICommand, e);
  Object.defineProperty(DRICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_DUPLICATE_RECRUITMENT_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DRICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleBasicController.getInstance().dispatchEvent(new l.AutoRecruitmentInfoEvent(l.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, true, i));
        break;
      default:
        this.showErrorDialog(e, t);
        c.CastleBasicController.getInstance().dispatchEvent(new l.AutoRecruitmentInfoEvent(l.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, false, null));
    }
    return false;
  };
  DRICommand.prototype.getDialogClassByListId = function (e) {
    switch (e) {
      case s.UnitProductionConst.TOOLS_LIST:
        return p.AutoRecruitmentCopyToolsDialog;
      default:
        return h.AutoRecruitmentCopyUnitsDialog;
    }
  };
  return DRICommand;
}(u.CastleCommand);
exports.DRICommand = d;
var p = require("./1574.js");
var h = require("./1579.js");
o.classImplementsInterfaces(d, "IExecCommand");