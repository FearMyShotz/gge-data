Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./1946.js");
var u = require("./10.js");
var d = createjs.Point;
var p = function (e) {
  function GRICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GRICommand, e);
  Object.defineProperty(GRICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_RELOCATION_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GRICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (s.int(i.JM) == 1 && (this.layoutManager.currentState == h.CastleLayoutManager.STATE_WORLDMAP || this.layoutManager.currentState == h.CastleLayoutManager.STATE_WORLDMAP_RELOCATION)) {
          var n = l.CastleModel.worldmapData.getAreaVEByXY(new d(i.OX, i.OY), true);
          this.layoutManager.hideAllIngameUIComponents();
          if (n) {
            this.layoutManager.hideAllIngameUIComponents();
            n.remove();
            n.removeNameMC();
          }
          var o = l.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(i.OX, i.OY);
          if (o) {
            o.resetVO();
          }
        }
        l.CastleModel.userData.parse_GRI(i);
        l.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetCastleListVO(l.CastleModel.userData.playerID));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GRICommand;
}(u.CastleCommand);
exports.GRICommand = p;
var h = require("./17.js");
o.classImplementsInterfaces(p, "IExecCommand");