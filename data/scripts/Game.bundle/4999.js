Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./7.js");
var c = require("./37.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./9.js");
var h = require("./282.js");
var g = require("./1202.js");
var C = require("./10.js");
var _ = function (e) {
  function SSCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SSCCommand, e);
  Object.defineProperty(SSCCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SAVE_SHOPPING_CART;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SSCCommand.prototype.executeCommand = function (e, t) {
    var i = d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    switch (e) {
      case r.ERROR.ALL_OK:
        if (i) {
          var n = i.shoppingCartOptionsIdsByCategory.reduce(function (e, t) {
            return e.concat(t);
          }, []);
          i.shoppingCartOptionIds = n;
        }
        break;
      case r.ERROR.NO_SPACE_WARNING:
        if (i) {
          var a = i.shoppingCartOptionsIdsByCategory;
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.ModernYesNoDialog, new o.BasicStandardYesNoDialogProperties("generic_alert_watchout", "generic_timeSkips_inventoryFull_warning_desc", function () {
            var e = new g.C2SSaveShoppingCartVO(a, true);
            d.CastleModel.smartfoxClient.sendCommandVO(e);
          }));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    u.CastleBasicController.getInstance().dispatchEvent(new c.CastleServerMessageArrivedEvent(c.CastleServerMessageArrivedEvent.SSC_ARRIVED, [e]));
    return false;
  };
  return SSCCommand;
}(C.CastleCommand);
exports.SSCCommand = _;
a.classImplementsInterfaces(_, "IExecCommand");