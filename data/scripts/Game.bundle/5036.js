Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function RWWCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RWWCommand, e);
  Object.defineProperty(RWWCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_RUBY_WISHING_WELL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RWWCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case a.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        r.CastleModel.rubyWishingWellData.parse_RWW(i);
        break;
      case a.ERROR.NOT_ENOUGH_RESOURCES:
        this.layoutManager.hideDialog(u.RubyWishingWellDialog);
        if ((i = t.length > 0 ? JSON.parse(t[1]) : {}).hasOwnProperty("W") && i.hasOwnProperty("S")) {
          this.showErrorDialog(e, t);
        }
        break;
      default:
        this.layoutManager.hideDialog(u.RubyWishingWellDialog);
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RWWCommand;
}(l.CastleCommand);
exports.RWWCommand = c;
var u = require("./1607.js");
o.classImplementsInterfaces(c, "IExecCommand");