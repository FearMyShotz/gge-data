Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./18.js");
var g = require("./7.js");
var C = require("./28.js");
var _ = require("./37.js");
var m = require("./71.js");
var f = require("./4.js");
var O = require("./10.js");
var E = function (e) {
  function JAACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JAACommand, e);
  Object.defineProperty(JAACommand.prototype, "cmdId", {
    get: function () {
      return g.ClientConstSF.S2C_JOIN_AREA;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  JAACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case p.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        u.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_KINGDOM_COMMAND, i.KID);
        var n = y.AreaFactory.createAreaFromServer(i.T, i.gca);
        if (!n) {
          return false;
        }
        f.CastleModel.resourcePoolData.reset();
        D.Iso.renderer.destroy();
        f.CastleModel.areaData.addArea(n);
        n.updater.parseJAA(i);
        this.layoutManager.state = T.CastleLayoutManager.STATE_ISO;
        b.IsoConst.MOVEMENTS_ACTIVATED = false;
        if (i.gsm) {
          f.CastleModel.mineData.parse_GSM(i.gsm);
        }
        f.CastleModel.militaryData.parse_SPL(i.spl0);
        f.CastleModel.militaryData.parse_SPL(i.spl1);
        f.CastleModel.militaryData.parse_SPL(i.spl2);
        f.CastleModel.militaryData.parse_SPL(i.spl3);
        f.CastleModel.militaryData.parse_GUI(i.gui);
        f.CastleModel.userData.parse_UAP(i.uap);
        if (i.gca && i.gca.O) {
          f.CastleModel.titleData.parseO(i.gca.O);
        }
        if (i.hin) {
          f.CastleModel.hunterData.parse_HIN(i.hin);
        }
        if (i.sin) {
          f.CastleModel.decoStorage.parseSIN(i.sin);
        }
        if (f.CastleModel.userData.joinCastleCount == 0) {
          this.checkTipText();
          if (a.EnvGlobalsHandler.globals.accountCookie.sessionType == o.SessionTypes.FIRST_SESSION) {
            var d = new r.BasicProfilingTrackingCommandVO();
            u.CommandController.instance.executeCommand(s.BasicController.COMMAND_TRACK_PROFILING, d);
          }
          c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.GAME_PLAYABLE);
          L.GZPTrackingController.getInstance().startTracking();
          this.sentPingTracking();
        }
        f.CastleModel.userData.joinCastleCount++;
        if (i.rci) {
          f.CastleModel.resourceCartsData.parse_RCI(i.rci);
        }
        if (D.Iso.controller && D.Iso.controller.dataUpdater) {
          var h = D.Iso.controller.dataUpdater.movementUpdater;
          if (h) {
            v.renderScheduler.addTask(function () {
              b.IsoConst.MOVEMENTS_ACTIVATED = true;
              h.spawnMaxMovements(true);
            });
          }
        }
        if (i.abpi) {
          f.CastleModel.breweryData.parse_ABPI(i.abpi[0], true);
        }
        if (n.isFactionCamp) {
          f.CastleModel.smartfoxClient.sendCommandVO(new S.C2SGetDetailedCastleListVO());
        }
        if (i.crai) {
          f.CastleModel.craftingData.parseAllQueueData(i.crai);
        }
        if (f.CastleModel.userData.toShowDialogsAfterJAA.length > 0) {
          for (var g = 0; g < f.CastleModel.userData.toShowDialogsAfterJAA.length; g++) {
            A.CastleDialogHandler.getInstance().registerDialogs(f.CastleModel.userData.toShowDialogsAfterJAA[g]);
          }
          f.CastleModel.userData.toShowDialogsAfterJAA = [];
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    this.controller.dispatchEvent(new _.CastleServerMessageArrivedEvent(_.CastleServerMessageArrivedEvent.JAA_ARRIVED));
    return false;
  };
  JAACommand.prototype.sentPingTracking = function () {
    var e = Math.random() * C.ClientConstTime.MINUTES_2_MILLISEC;
    window.setTimeout(function () {
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.PING);
    }, e);
  };
  JAACommand.prototype.checkTipText = function () {
    if (f.CastleModel.areaData.activeArea.areaInfo.isOwnMapobject && f.CastleModel.areaData.activeArea.commonInfo.isCastleBurning) {
      u.CommandController.instance.executeCommand(I.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [h.ClientConstCastle.TIP_REPAIR, false]);
      this.controller.dispatchEvent(new m.AreaDataEvent(m.AreaDataEvent.ON_BURNING_CASTLE_UPDATED));
    }
  };
  return JAACommand;
}(O.CastleCommand);
exports.JAACommand = E;
var y = require("./5229.js");
var b = require("./144.js");
var D = require("./34.js");
var I = require("./29.js");
var T = require("./17.js");
var v = require("./408.js");
var S = require("./218.js");
var A = require("./9.js");
var L = require("./1925.js");
d.classImplementsInterfaces(E, "IExecCommand");