Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./265.js");
var r = require("./15.js");
var l = require("./4.js");
var c = function (e) {
  function CFCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CFCCommand, e);
  Object.defineProperty(CFCCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GACHA_FREECHEST;
    },
    enumerable: true,
    configurable: true
  });
  CFCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = i.EID;
        var a = l.CastleModel.specialEventData.getActiveEventByEventId(n);
        if (a) {
          a.parseGachaEvent(i);
          r.CastleBasicController.getInstance().dispatchEvent(new s.GachaEvent(s.GachaEvent.SPIN, a));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CFCCommand;
}(require("./10.js").CastleCommand);
exports.CFCCommand = c;