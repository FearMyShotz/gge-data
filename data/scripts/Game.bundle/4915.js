Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./7.js");
var p = require("./37.js");
var h = require("./4.js");
var g = require("./43.js");
var C = require("./9.js");
var _ = require("./38.js");
var m = require("./910.js");
var f = require("./909.js");
var O = require("./1833.js");
var E = require("./1831.js");
var y = require("./1788.js");
var b = require("./10.js");
var D = function (e) {
  function ARCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ARCCommand, e);
  Object.defineProperty(ARCCommand.prototype, "cmdId", {
    get: function () {
      return d.ClientConstSF.S2C_RENAME_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ARCCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case l.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        var n = h.CastleModel.userData.castleList.getCastleVOByID(i.CID, i.KID);
        if (!i.P && n && n.areaType == r.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
          h.CastleModel.smartfoxClient.sendCommandVO(new y.C2SJoinAreaVO(n.absAreaPosX, n.absAreaPosY, i.KID));
        }
        break;
      case l.ERROR.USAGE_OF_BADWORDS:
        var s = "";
        if ((i = JSON.parse(t[1])).BW && i.BW[0]) {
          s = i.BW[0];
        }
        this.showNameOrRenameDialog(t);
        C.CastleDialogHandler.getInstance().registerDialogsWithType(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("alert_badword_textReplacement", [new c.TextVO(s)])), false, a.BasicDialogHandler.PRIORITY_LOW, 0, g.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case l.ERROR.TEXT_TOO_SHORT:
        this.showNameOrRenameDialog(t);
        C.CastleDialogHandler.getInstance().registerDialogsWithType(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("alert_castlenameTooShort")), false, a.BasicDialogHandler.PRIORITY_LOW, 0, g.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case l.ERROR.NOT_IN_OWNED_CASTLE:
      case l.ERROR.NO_FREE_RENAME:
        C.CastleDialogHandler.getInstance().registerDialogsWithType(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_information"), u.Localize.text("target_not_owned")), false, a.BasicDialogHandler.PRIORITY_LOW, 0, g.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case l.ERROR.NO_EVENT:
        break;
      default:
        this.showNameOrRenameDialog(t);
        this.showErrorDialog(e, t);
    }
    this.controller.dispatchEvent(new p.CastleServerMessageArrivedEvent(p.CastleServerMessageArrivedEvent.ARC_ARRIVED, t));
    return false;
  };
  ARCCommand.prototype.showNameOrRenameDialog = function (e) {
    var t = JSON.parse(e[1]);
    var i = h.CastleModel.userData.castleList.getCastleVOByID(t.CID, t.KID);
    if (!i) {
      if (i = h.CastleModel.userData.kingstowerList.getVOByID(t.CID)) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNameCastleDialog, new f.CastleNameCastleDialogProperties(i, t.KID, t.CID), false, a.BasicDialogHandler.PRIORITY_HIGH);
        return;
      }
      if (i = h.CastleModel.userData.monumentList.getVOByID(t.CID)) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNameCastleDialog, new f.CastleNameCastleDialogProperties(i, t.KID, t.CID), false, a.BasicDialogHandler.PRIORITY_HIGH);
        return;
      }
      if (i = h.CastleModel.userData.laboratoryList.getVOByID(t.CID)) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNameCastleDialog, new f.CastleNameCastleDialogProperties(i, t.KID, t.CID), false, a.BasicDialogHandler.PRIORITY_HIGH);
        return;
      }
      if (i = h.CastleModel.userData.villageList.getVillageByID(t.CID, t.KID)) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNameCastleDialog, new f.CastleNameCastleDialogProperties(i, t.KID, t.CID), false, a.BasicDialogHandler.PRIORITY_HIGH);
        return;
      }
    }
    if (t.P == 0) {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNameCastleDialog, new f.CastleNameCastleDialogProperties(h.CastleModel.userData.castleList.getCastleVOByID(t.CID, t.KID), t.KID, t.CID), false, a.BasicDialogHandler.PRIORITY_HIGH);
    } else {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleRenameCastleDialog, new E.CastleRenameCastleDialogProperties(t.N, h.CastleModel.userData.castleList.getCastleVOByID(t.CID, h.CastleModel.kingdomData.activeKingdomID)), false);
    }
  };
  return ARCCommand;
}(b.CastleCommand);
exports.ARCCommand = D;
s.classImplementsInterfaces(D, "IExecCommand");