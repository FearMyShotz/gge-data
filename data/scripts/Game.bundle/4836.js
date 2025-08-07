Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1152.js");
var l = require("./10.js");
var c = function (e) {
  function BRICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BRICommand, e);
  Object.defineProperty(BRICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BOUGHT_RELIC_EQUIPMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BRICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new r.CastleEquipmentMerchantEventIncomingDialogProperties();
        n.inventory = BRICommand.parseEquipmentInventory(i.I);
        n.packageID = parseInt(i.PID);
        n.fromEventID = parseInt(i.TID);
        n.fromBuyType = parseInt(i.BT);
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleEquipmentMerchantEventIncomingDialog, n);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  BRICommand.parseEquipmentInventory = function (e) {
    if (!e) {
      return null;
    }
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new p.CollectableItemRelicVO();
          a.parseServerObject(o[1]);
          var s = a.vo;
          t.push(s);
        }
      }
    }
    return t;
  };
  return BRICommand;
}(l.CastleCommand);
exports.BRICommand = c;
var u = require("./9.js");
var d = require("./1153.js");
var p = require("./289.js");
o.classImplementsInterfaces(c, "IExecCommand");