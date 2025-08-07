Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./1667.js");
var d = require("./1668.js");
var p = require("./10.js");
var h = function (e) {
  function VFICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(VFICommand, e);
  Object.defineProperty(VFICommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ACHIEVEMENT_FINISHED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  VFICommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  VFICommand.prototype.exec = function (e) {
    var t = r.int(e[0]);
    var i = e[1];
    switch (t) {
      case s.ERROR.ALL_OK:
        this.paramObj = JSON.parse(i[1]);
        if (c.CastleModel.userData) {
          c.CastleModel.currencyData.parseGCU(this.paramObj.gcu);
        }
        if (this.paramObj.grc != null && c.CastleModel.areaData.activeArea != null) {
          c.CastleModel.areaData.activeArea.updater.parseGRC(this.paramObj.grc);
        }
        if (c.CastleModel.castleAchievementData.getAchievementByID(this.paramObj.AID).achievementSerieVO.achievementSeriesID == g.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleAchievementLevelUpDialog, new u.CastleAchievementLevelUpDialogProperties(this.paramObj.AID), true, o.BasicDialogHandler.PRIORITY_LOW);
        } else {
          f.CastleIngameMessageHandler.getInstance().registerMessage(m.CastleAchievementPopupDialog, new d.CastleAchievementPopupDialogProperties(this.paramObj.AID), true, o.BasicDialogHandler.PRIORITY_MIDDLE);
        }
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return VFICommand;
}(p.CastleCommand);
exports.VFICommand = h;
var g = require("./811.js");
var C = require("./9.js");
var _ = require("./1678.js");
var m = require("./1679.js");
var f = require("./657.js");
a.classImplementsInterfaces(h, "IExecCommand");