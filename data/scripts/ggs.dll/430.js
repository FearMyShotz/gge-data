Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./17.js");
var s = require("./26.js");
var r = require("./9.js");
var o = require("./68.js");
var l = require("./44.js");
var u = function (e) {
  function GPICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GPICommand, e);
  Object.defineProperty(GPICommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_GET_PLAYER_INFO;
    },
    enumerable: true,
    configurable: true
  });
  GPICommand.prototype.executeCommand = function (e, t) {
    if (e == o.BasicErrorConstants.ALL_OK) {
      var n = JSON.parse(t.pop()).networkId;
      a.TrackingCache.getInstance().networkId = n;
      return true;
    }
    l.error("GPICommand received error: " + e.toString() + " while expecting to get errorId 0");
    return false;
  };
  return GPICommand;
}(s.BasicCommand);
exports.GPICommand = u;