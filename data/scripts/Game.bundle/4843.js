Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./118.js");
var l = require("./15.js");
var c = require("./10.js");
var u = function (e) {
  function ERECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ERECommand, e);
  Object.defineProperty(ERECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ENCHANT_RELIC_ITEM_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ERECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleBasicController.getInstance().dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, [i.E]));
        break;
      case a.ERROR.ENCHANTING_FAILED:
        l.CastleBasicController.getInstance().dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, []));
        break;
      default:
        this.showErrorDialog(e, t);
        l.CastleBasicController.getInstance().dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, []));
    }
    return false;
  };
  return ERECommand;
}(c.CastleCommand);
exports.ERECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");