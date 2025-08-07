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
  function STECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(STECommand, e);
  Object.defineProperty(STECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SELECT_TITLE_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  STECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (t.length > 0) {
          var i = JSON.parse(t[1]);
          r.CastleModel.titleData.parseSTE(i);
          if (u.CastleLayoutManager.getInstance().isInState(u.CastleLayoutManager.STATE_WORLDMAP)) {
            var n = u.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            r.CastleModel.worldmapData.updateAreaRange(n.x, n.y, n.x + n.width, n.y + n.height);
          }
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return STECommand;
}(l.CastleCommand);
exports.STECommand = c;
var u = require("./17.js");
o.classImplementsInterfaces(c, "IExecCommand");