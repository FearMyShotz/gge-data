Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./10.js");
var r = require("./4.js");
var l = function (e) {
  function GNCICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GNCICommand, e);
  Object.defineProperty(GNCICommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GET_PLAYER_NAME_CHANGE_INFO_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GNCICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        r.CastleModel.changePlayerNameData.parse_GNCI(JSON.parse(t[1]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GNCICommand;
}(s.CastleCommand);
exports.GNCICommand = l;