Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = createjs.Point;
var u = function (e) {
  function GHWCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GHWCommand, e);
  Object.defineProperty(GHWCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_HELLO_WORLD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GHWCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.CastleModel.areaData.activeArea;
        if (n) {
          r.CastleModel.areaData.changePosOfOwnArea(new c(i.X, i.Y));
          r.CastleModel.worldmapCameraData.lastVisitedCastlePosition = n.areaInfo.absAreaPos;
        }
        r.CastleModel.worldmapCameraData.savedMapPosition = null;
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GHWCommand;
}(l.CastleCommand);
exports.GHWCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");