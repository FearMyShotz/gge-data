Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./5097.js");
var d = require("./10.js");
var p = function (e) {
  function RGGCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RGGCommand, e);
  Object.defineProperty(RGGCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_RECIEVE_GOODGAMES_GIFT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RGGCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = h.CollectableManager.parser.s2cParamList.createList(i.R);
        var o = c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_GGS_GIFT);
        var l = r.int(o ? o.skinID : 0);
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleGGSGiftDialog, new u.CastleMysteryBoxResultDialogProperties(n, l));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return RGGCommand;
}(d.CastleCommand);
exports.RGGCommand = p;
var h = require("./50.js");
var g = require("./9.js");
var C = require("./5098.js");
o.classImplementsInterfaces(p, "IExecCommand");