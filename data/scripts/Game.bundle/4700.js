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
  function AQICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AQICommand, e);
  Object.defineProperty(AQICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_QUIT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AQICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.chatData.resetHistory();
        r.CastleModel.userData.parse_GAL(i.gal);
        r.CastleModel.allianceData.resetMyAlliance();
        if (u.CastleLayoutManager.getInstance().currentState == u.CastleLayoutManager.STATE_WORLDMAP) {
          var n = u.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
          r.CastleModel.worldmapData.updateAreaRange(n.x, n.y, n.x + n.width, n.y + n.height);
          this.layoutManager.worldmapScreen.renderer.renderLayer();
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AQICommand;
}(l.CastleCommand);
exports.AQICommand = c;
var u = require("./17.js");
o.classImplementsInterfaces(c, "IExecCommand");