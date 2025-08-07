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
  function DGECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DGECommand, e);
  Object.defineProperty(DGECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GACHA_SPIN;
    },
    enumerable: true,
    configurable: true
  });
  DGECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = i.ID;
        var a = l.CastleModel.gachaData.getGachaVOByID(n);
        var c = a ? l.CastleModel.specialEventData.getActiveEventByEventId(a.eventID) : null;
        if (c) {
          c.parseGachaEvent(i);
          r.CastleBasicController.getInstance().dispatchEvent(new s.GachaEvent(s.GachaEvent.SPIN, c, i.LTR));
        }
        break;
      default:
        this.showErrorDialog(e, t);
        r.CastleBasicController.getInstance().dispatchEvent(new s.GachaEvent(s.GachaEvent.SPIN_ANIMATION_COMPLETE, null));
    }
    return false;
  };
  return DGECommand;
}(require("./10.js").CastleCommand);
exports.DGECommand = c;