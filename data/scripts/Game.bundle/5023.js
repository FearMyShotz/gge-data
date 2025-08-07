Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./645.js");
var u = require("./1934.js");
var d = require("./10.js");
var p = function (e) {
  function DRLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DRLCommand, e);
  Object.defineProperty(DRLCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_DUPLICATE_RECRUITMENT_LOOP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DRLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        this.controller.dispatchEvent(new c.AutoRecruitmentEvent(c.AutoRecruitmentEvent.ON_COPY_SUCCESS));
        break;
      case s.ERROR.NOT_ENOUGH_RESOURCES:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", r.Localize.text("dialog_copyQueue_tools_resourcesGone")));
        break;
      case s.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        var i = JSON.parse(t[1]);
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.AutoRecruitmentBuyRecruitmentSlots, new u.AutoRecruitmentBuyRecruitmentSlotsProperties(i.LID, i.AMT));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return DRLCommand;
}(d.CastleCommand);
exports.DRLCommand = p;
var h = require("./9.js");
var g = require("./38.js");
var C = require("./1935.js");
a.classImplementsInterfaces(p, "IExecCommand");