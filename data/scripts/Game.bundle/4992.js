Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./4993.js");
var p = require("./10.js");
var h = function (e) {
  function PARCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PARCommand, e);
  Object.defineProperty(PARCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_PAYMENT_REWARD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PARCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i != null) {
          for (var n = 0, s = i; n < s.length; n++) {
            var c = s[n];
            if (c !== undefined) {
              var p = a.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_TIERED_PRIME_DAY), "TieredPaymentrewardEventVO");
              if (p) {
                p.boughtC2 = c.BC2;
              }
              var h = u.CastleModel.primeDayData.getPrimeDayXMLNodeByID(c.ST);
              if (h && h.isMultiTiered) {
                var O = g.CollectableManager.parser.s2cParamList.createList(c.RW);
                var E = new d.CastleTieredPrimeDayRewardProperties(O);
                C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleTieredPrimeDayRewardDialog, E, true, o.BasicDialogHandler.PRIORITY_HIGH);
              } else {
                C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastlePaymentRewardSpecialOfferFinishDialog, new m.CastlePaymentRewardSpecialOfferFinishDialogProperties(c), true, o.BasicDialogHandler.PRIORITY_HIGH);
              }
            }
          }
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return PARCommand;
}(p.CastleCommand);
exports.PARCommand = h;
var g = require("./50.js");
var C = require("./9.js");
var _ = require("./1079.js");
var m = require("./1932.js");
var f = require("./4994.js");
s.classImplementsInterfaces(h, "IExecCommand");