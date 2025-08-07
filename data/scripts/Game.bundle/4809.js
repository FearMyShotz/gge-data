Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./476.js");
var c = require("./37.js");
var u = require("./4.js");
var d = function (e) {
  function UBCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UBCCommand, e);
  Object.defineProperty(UBCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UBCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        u.CastleModel.areaData.activeArea.updater.parseConstructionItems(i.CI);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    this.dispatchArrivedEvent(e, t);
    return false;
  };
  Object.defineProperty(UBCCommand.prototype, "eventType", {
    get: function () {
      return c.CastleServerMessageArrivedEvent.UBC_ARRIVED;
    },
    enumerable: true,
    configurable: true
  });
  return UBCCommand;
}(l.CastleDispatchingCommand);
exports.UBCCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");