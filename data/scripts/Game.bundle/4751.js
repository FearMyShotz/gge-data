Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./758.js");
var l = require("./135.js");
var c = require("./10.js");
var u = function (e) {
  function SDCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SDCCommand, e);
  Object.defineProperty(SDCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SKIP_DUNGEON_COOLDOWN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SDCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = d.WorldmapObjectFactory.parseWorldMapArea(i.AI);
        this.controller.dispatchEvent(new r.SkipCooldownEvent(r.SkipCooldownEvent.UPDATE, n));
        break;
      case a.ERROR.NOT_ENOUGH_CURRENCY2:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleNoMoneyC2Dialog, new l.CastleNoMoneyC2DialogProperties());
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SDCCommand;
}(c.CastleCommand);
exports.SDCCommand = u;
var d = require("./147.js");
var p = require("./9.js");
var h = require("./138.js");
o.classImplementsInterfaces(u, "IExecCommand");