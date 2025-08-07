Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./483.js");
var l = require("./1152.js");
var c = require("./10.js");
var u = function (e) {
  function BEQCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BEQCommand, e);
  Object.defineProperty(BEQCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BOUGHT_EQUIPMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BEQCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new l.CastleEquipmentMerchantEventIncomingDialogProperties();
        n.inventory = BEQCommand.parseEquipmentInventory(i.I);
        n.packageID = parseInt(i.PID);
        n.fromEventID = parseInt(i.TID);
        n.fromBuyType = parseInt(i.BT);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleEquipmentMerchantEventIncomingDialog, n);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  BEQCommand.parseEquipmentInventory = function (e) {
    if (!e) {
      return null;
    }
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = r.CastleEquipmentFactory.createEquipmentVO(o);
          t.push(a);
        }
      }
    }
    return t;
  };
  return BEQCommand;
}(c.CastleCommand);
exports.BEQCommand = u;
var d = require("./9.js");
var p = require("./1153.js");
o.classImplementsInterfaces(u, "IExecCommand");